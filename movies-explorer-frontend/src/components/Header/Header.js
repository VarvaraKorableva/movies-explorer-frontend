import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import headerLogo from '../../images/logo.svg'

function Header({loggedIn}) {
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
    <header className={`header ${loggedIn && location.pathname === '/'? 'header__nolog' : loggedIn ? 'header__log': 'header__nolog'}`}>
      <Link to="/">
        <img src={headerLogo} alt="Логотип" className='header__logo'/>
      </Link>
      {loggedIn?
        isMobile?<p className='header__burger'></p>:
        <div className='header__wrapper'>
          <div className='header__linkwrapper'>
          <Link to="/movies" className='header__linktofilms'>
            <p className='header__link'>Фильмы</p>
          </Link>
          <Link to="/saved-movies" className='header__linktofilms'>
          <p className='header__link header__link_activ'>Сохраненные фильмы</p>
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
            <button className='header__btn header__btn_activ'>Войти</button>
          </Link>
          
        </div>)
      }

    </header>
  ) 
}

export default Header;

//В стейт записать кол-во карточек в зависимости от ширины экрана, а в функции хэндлере обновлять стейт в зависимости от window.innerWidth и слушатель на resize повесить
