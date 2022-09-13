import React from 'react'
import './Login.css'
import registerLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function Login({handleLogin}) {

  const [values, setValues] = React.useState({});

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin( values.password, values.email );
  }
  return (
    <section className='login'>
      <form className='login__form' onSubmit={handleSubmit}>
        <Link className='login__logolink' to="/">
        <img src={registerLogo} alt="Логотип" className='login__logo'/>
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <fieldset className='login__fieldset'>
          <p className='login__inputname'>E-mail</p>
          <input className='login__input'
                 required
                 name="email"
                 type="email"
                 autocomplete="on"
                 placeholder='pochta@yandex.ru|'
                 onChange={handleChange}>
          </input>
          <p className='login__inputname'>Пароль</p>
          <input className='login__input'
                 required
                 name="password"
                 type="password"
                 autocomplete="on"
                 onChange={handleChange}>
          </input>
        </fieldset>
        <button className='login__btn' type='submit'>Войти</button>
          <div className='login__wrapper'>
            <p className='login__subtitle'>Еще не зарегистрированы?
            <Link className='login__entrylink' to="/signup">Зарегистрироваться</Link>
            </p>
          </div>
      </form>
    </section>
  )
}

export default Login;
