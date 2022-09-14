import React from 'react'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import './Movies.css'


function Movies({loggedIn}) {
  return (
    <>
    <section className='main'>
      <SearchForm/>
      <MoviesCardList></MoviesCardList>
      <button class='movies__btn'>Еще</button>
    </section>
    </>
  )
}

export default Movies;
