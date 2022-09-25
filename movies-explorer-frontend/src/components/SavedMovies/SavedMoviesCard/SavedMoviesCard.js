import React from 'react'
//import './MoviesCard.css'
import '../../Movies/MoviesCard/MoviesCard.css'
import * as MainApi from '../../../utils/MainApi'

function MoviesCard({ savedMovie }) {

  const [isSaveBtnCliked,setIsSaveBtnCliked] = React.useState(false);

  console.log(savedMovie);

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

function getTimeFromMins(mins) {
  let hours = Math.trunc(mins/60);
let minutes = mins % 60;
return hours + 'ч ' + minutes + 'м';
};

  return (
<div className='moviescard'>
      <div className='moviescard__imgcontainer'>
        <img className='moviescard__img'
        src={savedMovie.image}
        alt={savedMovie.nameRU}
        />
        {isSaveBtnCliked?
        <button className='moviescard__savebtn_active'></button>
        :
        (<button className='moviescard__savebtn'></button>)
        }

      </div>
      <div className='moviescard__nameandtimecontainer'>
        <p className='moviescard__name'>{savedMovie.nameRU}</p>
        <p className='moviescard__time'>{getTimeFromMins(savedMovie.duration)}</p>
      </div>
    </div>
  )
}

export default MoviesCard;
//<p className='moviescard__time'>{movie.duration}</p>
//onClick={handleSaveMovie}

//<button {`${isSaveBtnCliked? className='moviescard__savebtn_active' : className='moviescard__savebtn'`} onClick={handleSave}}>
//</button>
