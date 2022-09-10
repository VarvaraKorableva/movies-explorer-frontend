import React from 'react'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import './Movies.css'
import Header from '../Header/Header'

function Movies({loggedIn}) {
  return (
    <>
    <Header loggedIn={loggedIn}></Header>
    <main className='main'>
        <SearchForm/>
        <MoviesCardList></MoviesCardList>
        <button class='movies__btn'>Еще</button>
        <Footer></Footer>
    </main>
    </>
  )
}
  
export default Movies;
