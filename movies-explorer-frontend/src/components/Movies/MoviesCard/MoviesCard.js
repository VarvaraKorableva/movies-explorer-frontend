import React from 'react';
import './MoviesCard.css';
import moviesTEST from '../../../images/pic__1_pic.png';

function MoviesCard() {
  return (
    <div className='moviescard'>
      <div className='moviescard__imgcontainer'>
        <img className='moviescard__img' alt ='изображение фильма' src={moviesTEST}/>
        <div className='moviescard__savebtn'>Сохранить</div>
      </div>
      
      <div className='moviescard__nameandtimecontainer'>
        <p className='moviescard__name'>33 слова о дизайне</p>
        <p className='moviescard__time'>1ч 17м</p>
      </div>
      
    </div>
  )
}

export default MoviesCard;
