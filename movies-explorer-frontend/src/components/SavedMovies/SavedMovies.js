import React from 'react'
import MainApiSearchForm from '../Movies/SearchForm/MainApiSearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import * as MainApi from '../../utils/MainApi'

function SavedMovies({ handleFindSavedMovieSubmit, savedMovies }) {

  return (
    <section>
      <MainApiSearchForm
          handleFindSavedMovieSubmit={handleFindSavedMovieSubmit}
      />
      <MoviesCardList
          savedMovies={savedMovies}
      />
    </section>
  )
}

export default SavedMovies;

/*      <MoviesCardList
savedMovies={savedMovies}
/>
*/
