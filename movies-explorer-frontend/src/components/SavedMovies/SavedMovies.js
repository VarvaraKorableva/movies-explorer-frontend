import React from 'react'
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies({loggedIn, isBurgerMenuCliked, handleFindNewMovieSubmit}) {
  return (
    <>
    <Header loggedIn={loggedIn} isBurgerMenuCliked={isBurgerMenuCliked}></Header>
      <div>
        <SearchForm
        handleFindNewMovieSubmit={handleFindNewMovieSubmit}
        />
        <MoviesCardList></MoviesCardList>
      </div>
    <Footer/>
    </>
  )
}

export default SavedMovies;

