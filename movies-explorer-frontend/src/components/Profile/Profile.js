import React from 'react'
import './Profile.css'
import registerLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';

function Profile({loggedIn, handleSignOut}) {
  return (

    <div className='profile'>
      <Header loggedIn={loggedIn}/>
      <form className='profile__form'>
        <h2 className='profile__title'>Привет, Варвара!</h2>

        <label className='profile__label'>Имя
        <input className='profile__input' required placeholder='Варвара'></input>
        </label>
        <label className='profile__label'>E-mail
        <input className='profile__input' required placeholder='v.kor@yandex.ru'></input>
        </label>
        <button className='profile__btn'>Редактировать</button>
      </form>
      <div className='profile__wrapper'>
        <button className='profile__entrybtn' onClick={handleSignOut}>Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;
