import React from 'react'
import SearchForm from '../Movies/SearchForm/SearchForm'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

function SavedMovies({loggedIn}) {
  return (
    <>
    <Header loggedIn={loggedIn}></Header>
    <div>
      <SearchForm/>
      <MoviesCardList></MoviesCardList>
      <Footer></Footer>
    </div>
    </>
  )
}

export default SavedMovies;

