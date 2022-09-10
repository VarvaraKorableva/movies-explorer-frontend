import React from 'react'
import './Login.css'
import registerLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function Login() {
  return ( 
    <div className='login'>
      
      <form className='login__form'>
        <Link className='login__logolink' to="/">
        <img src={registerLogo} alt="Логотип" className='login__logo'/>
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <fieldset className='login__fieldset'>
          <p className='login__inputname'>E-mail</p>
          <input className='login__input' placeholder='pochta@yandex.ru|'></input>
          <p className='login__inputname'>Пароль</p>
          <input className='login__input'></input>
        </fieldset>
        <button className='login__btn'>Войти</button>
          <div className='login__wrapper'>
            <p className='login__subtitle'>Еще не зарегистрированы?
            <Link className='login__entrylink' to="/signup">Зарегистрироваться</Link>
            </p>
          </div>
      </form>
      
    </div>    
  ) 
}

export default Login;
