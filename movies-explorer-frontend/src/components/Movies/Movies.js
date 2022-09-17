import React from 'react'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import './Movies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Movies({loggedIn, isBurgerMenuCliked, handleFindNewMovieSubmit}) {
  return (
    <>
    <Header loggedIn={loggedIn} isBurgerMenuCliked={isBurgerMenuCliked}></Header>
    <section className='main'>
      <SearchForm
      handleFindNewMovieSubmit={handleFindNewMovieSubmit}
      />
      <MoviesCardList></MoviesCardList>
      <button class='movies__btn'>Еще</button>
    </section>
    <Footer/>
    </>
  )
}

export default Movies;
