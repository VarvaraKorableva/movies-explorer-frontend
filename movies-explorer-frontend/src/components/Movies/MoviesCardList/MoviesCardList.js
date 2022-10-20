import React from "react"
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard"
import SavedMoviesCard from "../../SavedMovies/SavedMoviesCard/SavedMoviesCard"

  import { useLocation } from 'react-router-dom'

function MoviesCardList({ handleSavedCardDelete, savedMovies, onSave, limit, beatfilmMovies, isSaveBtnCliked, handleSaveMovie, toRenderMovies, keyWord, handleCardDelete, onDelete}) {

  const location = useLocation();

  return (
    location.pathname === '/movies'?

    <section className='moviescardlist'>
      {beatfilmMovies.length > 0 && beatfilmMovies.slice(0, limit).map((item)=> (
        <MoviesCard
          key={item.id || item.movieId}
          movie={item}
          isSaveBtnCliked={isSaveBtnCliked}
          handleSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
          onDelete={onDelete}
          onSave={onSave}
          />
      ))}
    </section>
    :
    (keyWord?
    <section className='moviescardlist'>
      {toRenderMovies.length > 0 && toRenderMovies.map((item)=> (
        <SavedMoviesCard
          savedMovie={item}
          key={item._id || item.movieId}
          handleCardDelete={handleSavedCardDelete}
          />
      ))}
    </section>
      :
    <section className='moviescardlist'>
      {savedMovies.length > 0 && savedMovies.map((item)=> (
        <SavedMoviesCard
          savedMovie={item}
          key={item._id || item.movieId}
          handleCardDelete={handleSavedCardDelete}
          />
      ))}
    </section>
    )
    )
}

  export default MoviesCardList;
