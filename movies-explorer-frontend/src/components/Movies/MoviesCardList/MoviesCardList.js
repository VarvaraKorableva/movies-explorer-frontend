import React from "react"
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard"
import SavedMoviesCard from "../../SavedMovies/SavedMoviesCard/SavedMoviesCard"

  import { useLocation } from 'react-router-dom'

function MoviesCardList({beatfilmMovies, isSaveBtnCliked, handleSaveMovie, savedMovies}) {

  const location = useLocation();
  //const beatfilmMovies = localStorage.getItem('data')

  return (
    location.pathname === '/movies' ?
    <section class='moviescardlist'>
      {beatfilmMovies.length > 0 && beatfilmMovies.map((item)=> (
        <MoviesCard
          key={item.id || item.movieId}
          movie={item}
          isSaveBtnCliked={isSaveBtnCliked}
          handleSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
          />
      ))}
    </section>
    :
    (
      <section class='saved-movies'>
      {savedMovies.length > 0 && savedMovies.map((item)=> (
        <SavedMoviesCard
          savedMovie={item}
          key={item.id || item.movieId}
          />
      ))}
    </section>
    )
    )
}

  export default MoviesCardList;

  /*
beatfilmMovies.length > 0 &&
<section className="cards">
      {cards.length > 0 && cards.map((card)=> (
        <Card
          key={card._id}
          card={card}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onTrashButton={onTrashButton}/>
      ))}
    </section>



  В стейт записать кол-во карточек в зависимости от ширины экрана, а в функции хэндлере обновлять
  стейт в зависимости от window.innerWidth и слушатель на resize повесить
  */
