import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import './Movies.css'
import * as MoviesApi from '../../utils/MoviesApi'
import * as MainApi from '../../utils/MainApi'


function Movies({ isSaveBtnCliked, handleSaveMovie }) {

  const [beatfilmMovies, setBeatfilmMovies] = useState({})
  const [savedMovies, setSavedMovies] = React.useState([]);


/*
  useEffect(() => {
    MoviesApi.getMovies()
    .then((data) => {
      localStorage.setItem('data', JSON.stringify(data))
      //const movies = localStorage.getItem('data')
      //setBeatfilmMovies(movies)
      setBeatfilmMovies(data)
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
*/

  function handleFindNewMovieSubmit() {
    MoviesApi.getMovies()
    .then((data) => {
      localStorage.setItem('data', JSON.stringify(data))
      //const movies = localStorage.getItem('data')
      //setBeatfilmMovies(movies)
      setBeatfilmMovies(data)
    })
    .catch((err) => {
      console.log(err);
    });
  }


/*
  function handleFindNewMovieSubmit() {
    MoviesApi.getMovies()
    .then((data) => {
      //const movies = localStorage.getItem(data);
      localStorage.setItem('data', JSON.stringify(data))
      //const movies = localStorage.getItem('data')
      //setBeatfilmMovies(data)
      setBeatfilmMovies(data)
      //console.log(movies)
    })
    .catch((err) => {
      console.log(err)
    })
  }*/

  return (
    <section className='main'>

      <SearchForm
        handleFindNewMovieSubmit={handleFindNewMovieSubmit}
      />
      <MoviesCardList
        beatfilmMovies={beatfilmMovies}
        savedMovies={savedMovies}
      />
      <button className='movies__btn'>Еще</button>
    </section>
  )
}

export default Movies;



