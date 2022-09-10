import React from 'react'
import './Register.css'
import registerLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register() {
  return ( 
    <div className='register'>
      
      <form className='register__form'>
        <Link to="/" className='register__logolink'>
          <img src={registerLogo} alt="Логотип" className='register__logo'/>
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <fieldset className='register__fieldset'>
          <p className='register__inputname'>Имя</p>
          <input className='register__input' placeholder='Варвара'></input>
          <p className='register__inputname'>E-mail</p>
          <input className='register__input' placeholder='v.kor@yandex.ru'></input>
          <p className='register__inputname'>Пароль</p>
          <input className='register__inputwrong' placeholder='••••••••••••••'></input>
          <p className='register__inputmistake'>Что-то пошло не так...</p>
        </fieldset>
        <button className='register__btn'>Зарегистрироваться</button>
          <div className='register__wrapper'>
            <p className='register__subtitle'>Уже зарегистрированы?
            <Link className='register__entrylink' to="/signin"> Войти</Link></p>
          </div>
      </form>
      
    </div>  
  ) 
}

export default Register;

