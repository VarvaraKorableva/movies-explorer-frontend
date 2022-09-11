import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return ( 
    <section className='navigation'>
    <div className='navigation__container'>
        <div className='navigation__closebtn'></div>
        <ul className='navigation_listcontainer'>
        
            <li className='navigation__list'>
                <Link className='navigation__listlink' to="/">Главная</Link>
            </li>
            <li className='navigation__list'>
                <Link className='navigation__listlink navigation__listlink_active' to="/movies">Фильмы</Link>
            </li>
            <li className='navigation__list'>
                <Link className='navigation__listlink' to="/saved-movies">Сохранённые фильмы</Link>
            </li>
        </ul>
        <div className='navigation__accoundwrapper'>
           <Link className='navigation__accound' to="/profile">Аккаунт</Link>
           <div className='navigation__accoundpic'></div>
        </div>
    </div>     
    </section>
  ) 
}

export default Navigation;
;
