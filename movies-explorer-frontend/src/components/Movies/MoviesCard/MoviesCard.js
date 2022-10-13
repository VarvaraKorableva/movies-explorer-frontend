import React from 'react'
import './MoviesCard.css'

function MoviesCard({ onDelete, onSave, movie, savedMovies }) {

  const [isSaveBtnCliked,setIsSaveBtnCliked] = React.useState(false)
  const isSaved = movie.id && savedMovies.some((m) => m.movieId === movie.id)


  const handleDeleteClick = () => {
    setIsSaveBtnCliked(false)
    onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0])
  }

  function handleSave() {
    setIsSaveBtnCliked(true)
    onSave(movie);
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
      <a href={movie.trailerLink} target="_blank">
        <img className='moviescard__img'
        src={`https://api.nomoreparties.co${movie.image.url}`}
        alt={movie.nameRU}
        />
      </a>
        {isSaveBtnCliked || isSaved?
        <button className='moviescard__savebtn_active' onClick={handleDeleteClick}></button>
        :
        (<button className='moviescard__savebtn' onClick={handleSave}></button>)
        }

      </div>
      <div className='moviescard__nameandtimecontainer'>
        <p className='moviescard__name'>{movie.nameRU}</p>
        <p className='moviescard__time'>{getTimeFromMins(movie.duration)}</p>
      </div>
    </div>
  )
}

export default MoviesCard;
