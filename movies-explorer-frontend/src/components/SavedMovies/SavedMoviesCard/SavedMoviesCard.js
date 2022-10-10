import React from 'react'
import '../../Movies/MoviesCard/MoviesCard.css'

function SavedMoviesCard({ savedMovie, handleCardDelete }) {

  function handleDelete() {
    handleCardDelete(savedMovie)
  }
  
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    if ( hours === 0 && minutes <= 40) {
      return minutes + 'м';
    } else {
      return hours + 'ч ' + minutes + 'м';
    }
  };

  return (
    <div className='moviescard'>
      <div className='moviescard__imgcontainer'>
      <a href={savedMovie.trailerLink} target="_blank">
        <img className='moviescard__img'
        src={savedMovie.image}
        alt={savedMovie.nameRU}
        />
      </a>
      <button className='moviescard__savebtn_active' onClick={handleDelete}></button>
      </div>
      <div className='moviescard__nameandtimecontainer'>
        <p className='moviescard__name'>{savedMovie.nameRU}</p>
        <p className='moviescard__time'>{getTimeFromMins(savedMovie.duration)}</p>
      </div>
    </div>
  )
}

export default SavedMoviesCard;
