import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation({isOpen, onClose}) {
  return (
    <aside className={`navigation ${isOpen && 'navigation__opened'}`}>
      <div className='navigation__container'>
        <button className='navigation__closebtn' onClick={onClose}></button>
        <ul className='navigation_listcontainer'>

            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink' to="/">Главная</Link>
            </li>
            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink' to="/movies">Фильмы</Link>
            </li>
            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink' to="/saved-movies">Сохранённые фильмы</Link>
            </li>
        </ul>
        <div className='navigation__accoundwrapper'>
           <Link className='navigation__accound' to="/profile" onClick={onClose}>Аккаунт</Link>
           <div className='navigation__accoundpic'></div>
        </div>
      </div>
    </aside>
  )
}

export default Navigation;
;
