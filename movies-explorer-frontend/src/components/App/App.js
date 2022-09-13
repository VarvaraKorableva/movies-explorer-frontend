import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
//import {CurrentUserContext} from '../contexts/CurrentUserContext';
import './App.css'
import Main from '../Main/Main'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as mainApi from '../../utils/MainApi'


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

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

  function handleLogin(password, email){
    mainApi.authorize(password, email)
      .then ((res) => {
        navigate('/movies')
      .catch((err) => {
        console.log(err)
      })
      })
  }

  return (
  <div className='page'>
    <Routes>

        <Route path="/" element={<Main loggedIn={loggedIn}/>}>
        </Route>

        <Route path="/movies" element={<Movies loggedIn={loggedIn}/>}>
        </Route>

        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>}>
        </Route>

        <Route path="/profile" element={
          <Profile
            loggedIn={loggedIn}
            handleSignOut={handleSignOut}/>}>
        </Route>

        <Route path="/signin" element={
          <Login
            handleLogin={handleLogin}/>}>
        </Route>

        <Route path="/signup" element={
          <Register
            handleRegSubmit={handleRegSubmit}/>}>
        </Route>

    </Routes>
  </div>
  );
}

export default App;
