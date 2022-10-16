import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import './App.css'
import Main from '../Main/Main'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import * as MainApi from '../../utils/MainApi'
import Navigation from '../Navigation/Navigation'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import useWindowDimensions from '../../hook/useWindowDimensions'


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({})
  const [savedMovies, setSavedMovies] = React.useState([])
  const [errorMessage, setErrorMessage] = React.useState('')
  const [errorChangeProfileMessage, setErrorChangeProfileMessage] = React.useState('')
  const [changeProfileMessage, setChangeProfileMessage] = React.useState('')
  const [profileError, setProfileError] = React.useState('')
  const [error, setError] = React.useState(false)
  const [logError, setLogError] = React.useState(false)

  const navigate = useNavigate();
  const [limit, setLimit] = React.useState(0)
  const [amount, setAmount] = React.useState(0);
  const { width } = useWindowDimensions()

  const getLimit = () => {
    if (width <= 700 && width > 400) {
      setLimit(5);
      setAmount(2)
    } else if (width <= 400) {
      setLimit(8);
      setAmount(2)
    } else {
      setLimit(12);
      setAmount(3)
    }
  };

  const addMovies = () => setLimit(limit + amount);

  React.useEffect(getLimit, [width]);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true)
  }

  function closeAllPopups() {
    setIsBurgerMenuOpen(false)
  }

  function handleGetUser() {
    MainApi.getUserInfo()
    .then((data) => {
      setLoggedIn(true)
      setCurrentUser(data.user)
    })
    .catch((err) => {
      setLoggedIn(false)
      console.log(err);
    });
  }

  //ф-ция регистрации
  function handleRegSubmit(userData){
    MainApi.register({
      password:userData.password,
      email:userData.email,
      name:userData.name,
  })
    .then((res) => {
      setLoggedIn(true)
      navigate('/movies')
      setError(false)
    })
    .catch((err) => {
      console.log(err)
      setError(true)
      setLoggedIn(false)
      if (err.status === 409 || 11000) {
        setErrorMessage('Ошибка, такой Email уже существует.');
      } else {
        setErrorMessage('На сервере произошла ошибка.');
      }
    })
  }

  //ф-ция выхода из приложения(стерка токена из куки)
  function handleSignOut(){
    MainApi.signOut()
    .then((res) => {
      setLoggedIn(false)
      navigate('/')
      setSavedMovies([])
      localStorage.removeItem('moviesAfterFindShortMovies')
      localStorage.removeItem('moviesAfterFilter')
      localStorage.removeItem('checkBoxStatus')
      localStorage.removeItem('keyWord')
      localStorage.removeItem('moviesData')
    })
    .catch((err) => {
      console.log(err)
      setLoggedIn(false)
    })
  }

  function handleLoginSubmit(userData){
    MainApi.authorize({
      password:userData.password,
      email:userData.email,
    })
    .then ((res) => {
      setLoggedIn(true)
      navigate('/movies')
      setLogError(false)
    })
    .catch((err) => {
      console.log(err)
      setLoggedIn(false)
      setLogError(true)
        if (err.status === 401 || 404 ) {
          setErrorMessage('Вы ввели неправильный логин или пароль.');
        } else {
          setErrorMessage('На сервере произошла ошибка.');
        }
    })
  }

  React.useEffect(() => {
    MainApi.getSavedMovies()
    .then((data) => {
      setSavedMovies(data.data)
    })
    .catch((err) => {
      console.log(err);
    });
  },[currentUser])

  React.useEffect(() => {
    handleGetUser()
  }, [loggedIn])

  const handleSaveMovie = (movie) => {
    const newMovie = {
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration,
      year: movie.year || 'no data',
      description: movie.description || 'no data',
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || 'no name',
      nameEN: movie.nameEN || 'no name',
    }
    MainApi.saveMovies(newMovie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function changeUserInfoSubmit(userData) {
    MainApi.changeUserInfo(userData)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email
        });
        setProfileError(false)
        setChangeProfileMessage('Изменения внесены');
      })
      .catch((err) => {
        console.log(err)
        setProfileError(true)
        if (err.status === 409 || 11000) {
          setErrorChangeProfileMessage('Ошибка, такой Email уже существует.');
        } else {
          setErrorChangeProfileMessage('На сервере произошла ошибка.');
        }
      })
  }

  const handleDeleteMovie = (movie) => {
    MainApi.deleteMovies(movie._id)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((m) => m._id !== movie._id)
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSavedCardDelete = (savedMovie) => {
    MainApi.deleteMovies(savedMovie._id)
    MainApi.getSavedMovies()
    .then((data) => {
      setSavedMovies(data.data)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
  <div className='page'>
    <Header
      loggedIn={loggedIn}
      isBurgerMenuCliked={handleBurgerMenuClick}>
    </Header>
  <Routes>
    <Route index element={<Main />} />

    <Route
      path="/"
      element={
        <Main
          loggedIn={loggedIn}
          isBurgerMenuCliked={handleBurgerMenuClick}/>
      }>
    </Route>

    <Route
      path="/movies"
      element={
        <ProtectedRoute loggedIn={loggedIn}>
          <Movies
            loggedIn={loggedIn}
            limit={limit}
            addMovies={addMovies}
            onDelete={handleDeleteMovie}
            onSave={handleSaveMovie}
            savedMovies={savedMovies}
          />
        </ProtectedRoute>
      }
    />

    <Route
      path="/saved-movies"
      element={
        <ProtectedRoute loggedIn={loggedIn}>
          <SavedMovies
            loggedIn={loggedIn}
            handleSavedCardDelete={handleSavedCardDelete}
            savedMovies={savedMovies}
            />
        </ProtectedRoute>
      }>
    </Route>

    <Route
      path="/profile"
      element={
        <ProtectedRoute loggedIn={loggedIn}>
          <Profile
            handleSignOut={handleSignOut}
            isBurgerMenuCliked={handleBurgerMenuClick}
            changeUserInfoSubmit={changeUserInfoSubmit}
            error={profileError}
            changeProfileMessage={changeProfileMessage}
            errorChangeProfileMessage={errorChangeProfileMessage}/>
        </ProtectedRoute>
      }>
    </Route>

    <Route
      path="/signin"
      element={
        <Login
        handleLoginSubmit={handleLoginSubmit}
        errorMessage={errorMessage}
        logError={logError}/>
      }>
    </Route>

    <Route
      path="/signup"
      element={
        <Register
          handleRegSubmit={handleRegSubmit}
          errorMessage={errorMessage}
          error={error}/>}>
    </Route>

    <Route
      path="*"
      element={
        <ProtectedRoute loggedIn={loggedIn}>
          <NotFoundPage />
        </ProtectedRoute>
      }>
    </Route>

  </Routes>

  <Navigation
    isBurgerMenuCliked={handleBurgerMenuClick}
    isOpen={isBurgerMenuOpen}
    onClose={closeAllPopups} />
  <Footer/>
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
