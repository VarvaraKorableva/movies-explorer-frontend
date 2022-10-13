import React from 'react'
import './Login.css'
import registerLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login({handleLoginSubmit, logError, errorMessage}) {

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: "onBlur"});
  const onSubmit = data => {
    handleLoginSubmit({
      password: data.password,
      email: data.email,
      name: data.name,
    });
    reset();
  };

  return (
    <section className='login'>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <Link className='login__logolink' to="/">
        <img src={registerLogo} alt="Логотип" className='login__logo'/>
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <fieldset className='login__fieldset'>
          <label  className='login__inputname'>E-mail
            <input className='login__input'
                 pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
                 type="email"
                 autoComplete="on"
                 defaultValue=""
                 {...register("email", {
                   required: "Поле обязательно для заполнения",
                   minLength: { value: 4, message: "E-mail должен содержать минимум 4 символа" },
                   maxLength: { value: 30, message: "E-mail не может превышать 30 символов" },
                   //pattern: { /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/, message: "E-mail не может превышать 30 символов" },
                   pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                 })}
            />
          </label>
          <span className='login__inputmistake'>
              {errors?.email && <p className='login__inputmistake'>{errors?.email?.message || 'Error'}</p>}
          </span>

          <label className='login__inputname'>Пароль
            <input className='login__input'
                 maxLength="8"
                 name="password"
                 type="password"
                 autoComplete="on"
                 defaultValue=""
                 {...register("password", {
                   required: "Поле обязательно для заполнения",
                   minLength: { value: 4, message: "Password должен содержать минимум 5 символов" },
                   maxLength: { value: 30, message: "Password не может превышать 8 символов" },
                 })}
            />
          </label>
          <span className='login__inputmistake'>
          {errors?.password && <p className='login__inputmistake'>{errors?.password?.message || 'Error'}</p>}
          </span>
        </fieldset>
        {logError?
        <p className='error-message'>{errorMessage}</p>
      : <></>}

        <button className={`'login__btn' ${isValid? 'login__btn_active': 'login__btn'}`} type='submit' disabled={!isValid}>Войти</button>
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
