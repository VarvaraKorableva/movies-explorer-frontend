import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import headerLogo from '../../images/logo.svg'

function Header({loggedIn, isBurgerMenuCliked}) {
  const [isMobile, setIsMobile] = React.useState(false);
  const location = useLocation();

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (

    location.pathname === '/signup' || location.pathname === '/signin'? <></> : (
    <header className={`header ${
      (!loggedIn || loggedIn) && location.pathname === '/' ? 'header__nolog'
      : loggedIn ? 'header__log'
      : 'header__log'
      }`}>
      <Link to="/">
        <img src={headerLogo} alt="Логотип" className='header__logo'/>
      </Link>
      {loggedIn?
        isMobile?<p className='header__burger' onClick={isBurgerMenuCliked}></p>:
        <div className='header__wrapper'>
          <div className='header__linkwrapper'>
          <Link to="/movies" className='header__linktofilms'>
            <p className={`'header__link' ${location.pathname === '/movies'? 'header__link_activ': 'header__link'}`}>Фильмы</p>
          </Link>
          <Link to="/saved-movies" className='header__linktofilms'>
          <p className={`'header__link' ${location.pathname === '/saved-movies'? 'header__link_activ': 'header__link'}`}>Сохраненные фильмы</p>
          </Link>
          </div>
          <div className='header__linktoaccountwrapper'>
            <Link to="/profile" className='header__accountlink'>
            <p className='header__linktoaccount'>Аккаунт</p>
            </Link>
          <div className='header__pic'></div>
          </div>
          </div>

      :(<div className='header__btnwrapper'>
          <Link to="/signup">
            <button className='header__btn'>Регистрация</button>
          </Link>
          <Link to="/signin">
            <button className='header__btn'>Войти</button>
          </Link>

        </div>)
      }

    </header>)
  )
}

export default Header;
