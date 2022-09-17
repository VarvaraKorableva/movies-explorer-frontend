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
import * as mainApi from '../../utils/MainApi'
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../NotFoundPage/NotFoundPage'


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
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
    mainApi.register({
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
    mainApi.signOut()
    .then((res) => {
      setLoggedIn(false)
      navigate('/');
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleLoginSubmit(password, email){
    mainApi.authorize(password, email)
      .then ((res) => {
        setLoggedIn(true)
        navigate('/movies')
      .catch((err) => {
        console.log(err)
      })
      })
  }

  React.useEffect(() => {
    mainApi.getUserInfo()
    .then((data) => {
      setCurrentUser(data.user);
      console.log(currentUser);
    })
    .catch((err) => {
      console.log(err);
    });
  },[location.pathname === '/profile']);

  function handleFindNewMovieSubmit() {
    console.log("click movie find")
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
  <div className='page'>
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
            isBurgerMenuCliked={handleBurgerMenuClick}
            closeAllPopups={closeAllPopups}
            handleFindNewMovieSubmit={handleFindNewMovieSubmit}
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
            isBurgerMenuCliked={handleBurgerMenuClick}
            closeAllPopups={closeAllPopups}
            handleFindNewMovieSubmit={handleFindNewMovieSubmit}
            />
        </ProtectedRoute>
      }>
    </Route>

    <Route
      path="/profile"
      element={
        <ProtectedRoute loggedIn={loggedIn}>
          <Profile
            loggedIn={loggedIn}
            handleSignOut={handleSignOut}
            closeAllPopups={closeAllPopups}/>
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
    isOpen={isBurgerMenuOpen}
    onClose={closeAllPopups} />

  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
