import React from 'react'
import './MoviesCard.css'
import * as MainApi from '../../../utils/MainApi'
import { useLocation } from 'react-router-dom'

function MoviesCard({ movie, savedMovies, savedMovie }) {

  const [isSaveBtnCliked,setIsSaveBtnCliked] = React.useState(false);
  //const isSaved = movie.id && savedMovies.some((m) => m.movieId === movie.id)
  const location = useLocation();

  console.log(savedMovie);

  const handleSaveMovie = (movie) => {
    const newMovie = {
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration,
      year: movie.year || 'no data',
      description: movie.description || 'no data',
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || 'no name',
      nameEN: movie.nameEN || 'no name',
    }
    MainApi.saveMovies(newMovie)
      .then((res) =>{
        setIsSaveBtnCliked(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }
/*
onClick={handleDelete}

  const handleCardDelete = (movie) => {

    MainApi.deleteMovies(movie._id)
      .then(() => {
        setIsSaveBtnCliked(false)
      })
      .catch((err) => {
        console.log(err);
      })
  }

/*
  function handleDelete() {
    console.log(movie)
    if (isSaved) {
      handleCardDelete(savedMovies.filter((m) => m.movieId === movie.id)[0])
    }
    setIsSaveBtnCliked(false)
  }
*/
  function handleSave() {
    handleSaveMovie(movie);
  }


function getTimeFromMins(mins) {
  let hours = Math.trunc(mins/60);
let minutes = mins % 60;
return hours + 'ч ' + minutes + 'м';
};

  return (

    location.pathname === '/saved-movies'?
(
    <div className='moviescard'>
      <div className='moviescard__imgcontainer'>
      <img className='moviescard__img'
        src={savedMovie.image}
        alt={savedMovie.nameRU}
        />
        <button className='moviescard__savebtn_active'></button>
      </div>
      <div className='moviescard__nameandtimecontainer'>
        <p className='moviescard__name'>gjkexbkjcm</p>
        <p className='moviescard__time'>60</p>
      </div>
    </div>
)
    :

    (<div className='moviescard'>
      <div className='moviescard__imgcontainer'>
        <img className='moviescard__img'
        src={`https://api.nomoreparties.co${movie.image.url}`}
        alt={movie.nameRU}
        />
        {isSaveBtnCliked?
        <button className='moviescard__savebtn_active'></button>
        :
        (<button className='moviescard__savebtn' onClick={handleSave}></button>)
        }

      </div>
      <div className='moviescard__nameandtimecontainer'>
        <p className='moviescard__name'>{movie.nameRU}</p>
        <p className='moviescard__time'>{getTimeFromMins(movie.duration)}</p>
      </div>
    </div>)
  )
}

export default MoviesCard;
//<p className='moviescard__time'>{movie.duration}</p>
//onClick={handleSaveMovie}

//<button {`${isSaveBtnCliked? className='moviescard__savebtn_active' : className='moviescard__savebtn'`} onClick={handleSave}}>
//</button>
