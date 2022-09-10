import React from "react"
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return ( 
    <>
    <section class='moviescardlist'>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
    </section>
    </>
    ) 
  }
  
  export default MoviesCardList;

  /*
  В стейт записать кол-во карточек в зависимости от ширины экрана, а в функции хэндлере обновлять 
  стейт в зависимости от window.innerWidth и слушатель на resize повесить
  */
