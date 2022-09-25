import React from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
//import * as mainApi from '../../utils/MainApi'
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});


  const navigate = useNavigate();
  const location = useLocation();

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true)
    console.log('click')
  }

  function closeAllPopups() {
    setIsBurgerMenuOpen(false)
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
      navigate('/movies');
    })
    .catch((err) => {
      console.log(err)
    })
  }

  //ф-ция выхода из приложения(стерка токена из куки)
  function handleSignOut(){
    MainApi.signOut()
    .then((res) => {
      setLoggedIn(false)
      navigate('/');
    })
    .catch((err) => {
      console.log(err)
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
      .catch((err) => {
        console.log(err)
      })
      })
  }

  React.useEffect(() => {
    MainApi.getUserInfo()
    .then((data) => {
      setCurrentUser(data.user);
      console.log(currentUser);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  React.useEffect(() => {
    MainApi.getSavedMovies()
    .then((data) => {
      setSavedMovies(data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  function handleFindSavedMovieSubmit() {
    MainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
    .catch((err) => {
      console.log(err);
    });
  }

  function changeUserInfoSubmit(userData) {
    MainApi.changeUserInfo(userData)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }
/**
const handleSaveMovie = (movie) => {
    const newMovie = {
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration,
      year: movie.year || 'no data',
      description: movie.description || 'no data',
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU || 'no name',
      nameEN: movie.nameEN || 'no name',
    }

    MainApi
      .saveMovie(newMovie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {

      })
  }
 */


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
            savedMovies={savedMovies}
            handleFindSavedMovieSubmit={handleFindSavedMovieSubmit}
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
            changeUserInfoSubmit={changeUserInfoSubmit}/>
        </ProtectedRoute>
      }>
    </Route>

    <Route
      path="/signin"
      element={
        <Login
        handleLoginSubmit={handleLoginSubmit}/>
      }>
    </Route>

    <Route
      path="/signup"
      element={
        <Register
          handleRegSubmit={handleRegSubmit}/>}>
    </Route>

    <Route
      path="*"
      element={
        <NotFoundPage />
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
