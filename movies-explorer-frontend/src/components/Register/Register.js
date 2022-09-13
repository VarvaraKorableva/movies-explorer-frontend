import React from 'react'
import './Register.css'
import registerLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register({handleRegSubmit}) {

  const [values, setValues] = React.useState({});

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegSubmit({
      password: values.password,
      email: values.email,
      name: values.name,
    });
  }

  return (
    <section className='register'>

      <form className='register__form' onSubmit={handleSubmit}>
        <Link to="/" className='register__logolink'>
          <img src={registerLogo} alt="Логотип" className='register__logo'/>
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <fieldset className='register__fieldset'>
          <p className='register__inputname'>Имя</p>
          <input className='register__input'
                 name="name"
                 type="text"
                 required
                 autocomplete="on"
                 placeholder='Варвара'
                 onChange={handleChange}>
          </input>
          <p className='register__inputname'>E-mail</p>
          <input className='register__input'
                 name="email"
                 type="email"
                 required
                 autocomplete="on"
                 placeholder='v.kor@yandex.ru'
                 onChange={handleChange}>
          </input>
          <p className='register__inputname'>Пароль</p>
          <input className='register__inputwrong'
                 name="password"
                 type="password"
                 required
                 autocomplete="on"
                 placeholder='••••••••••••••'
                 onChange={handleChange}>
          </input>
          <p className='register__inputmistake'>Что-то пошло не так...</p>
        </fieldset>
        <button className='register__btn' type='submit'>Зарегистрироваться</button>
          <div className='register__wrapper'>
            <p className='register__subtitle'>Уже зарегистрированы?
            <Link className='register__entrylink' to="/signin"> Войти</Link></p>
          </div>
      </form>
    </section>
  )
}

export default Register;

