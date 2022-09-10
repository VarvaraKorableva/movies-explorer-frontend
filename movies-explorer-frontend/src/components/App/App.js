import React from 'react'
import { Route, Routes } from 'react-router-dom';
//import {CurrentUserContext} from '../contexts/CurrentUserContext';
import './App.css'
import Main from '../Main/Main'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
  <div className='page'>
    <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn}/>}>
        </Route>  
        <Route path="/movies" element={<Movies loggedIn={loggedIn}/>}>
        </Route>
        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>}>
        </Route>
        <Route path="/profile" element={<Profile loggedIn={loggedIn}/>}>
        </Route>
        <Route path="/signin" element={<Login loggedIn={loggedIn}/>}>
        </Route>
        <Route path="/signup" element={<Register loggedIn={loggedIn}/>}>
        </Route>
    </Routes>
  </div>
  );
}

export default App;
