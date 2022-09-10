import React from 'react';
import './MoviesCard.css';
import moviesTEST from '../../../images/pic__1_pic.png';


function MoviesCard() {
  return (
    <div className='moviescard'>
      <img className='moviescard__img' alt ='изображение фильма' src={moviesTEST} />
      <div className='moviescard__nameandtimecontainer'>
        <p className='moviescard__name'>33 слова о дизайне</p>
        <p className='moviescard__time'>1ч 17м</p>
      </div>
      
    </div>
  )
}

export default MoviesCard;

/*

<div className='movies-card__content'>
        <div className='movies-card__content-text'>
          <h3 className='movies-card__content-text-title'>33 слова о дизайне</h3>
          <p className='movies-card__content-text-duration'>1ч42м</p>
        </div>
      </div>
*/
