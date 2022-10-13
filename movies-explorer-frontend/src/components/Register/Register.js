import React from 'react'
import { useForm } from "react-hook-form"
import './Register.css'
import registerLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register({handleRegSubmit, errorMessage, error}){
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: "onChange"});
  const onSubmit = data => {
    handleRegSubmit({
      password: data.password,
      email: data.email,
      name: data.name,
    });
    reset();
  };

  return (
    <section className='register'>
    <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
        <Link to="/" className='register__logolink'>
          <img src={registerLogo} alt="Логотип" className='register__logo'/>
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <fieldset className='register__fieldset'>
          <label className='register__inputname'>Имя
            <input className='register__input'

                 type="text"
                 autoComplete="on"
                 defaultValue=""
                 {...register("name", {
                   required: "Поле обязательно для заполнения",
                   minLength: { value: 2, message: "Имя должно содержать минимум 2 знаков, пожалуйста, исправьте" },
                   maxLength: { value: 30, message: "Имя не может превышать 30 символов, пожалуйста, исправьте" },
                   pattern: /[а-яА-Яa-zA-ZёË\- ]{1,}/,
                 })}
            />
            </label>
            <span className='register__inputmistake'>
              {errors?.name && <p className='register__inputmistake'>{errors?.name?.message || 'Error'}</p>}
            </span>

          <label className='register__inputname'>E-mail
            <input className='register__input'
                 type="email"
                 autoComplete="on"
                 defaultValue=""
                 {...register("email", {
                   required: "Поле обязательно для заполнения",
                   minLength: { value: 4, message: "E-mail должен содержать минимум 4 символа" },
                   maxLength: { value: 30, message: "E-mail не может превышать 30 символов" },
                   pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                 })}
            />
          </label>
          <span className='register__inputmistake'>
              {errors?.email && <p className='register__inputmistake'>{errors?.email?.message || 'Error'}</p>}
          </span>

          <label className='register__inputname'>Пароль
            <input className='register__input'

                 type="password"
                 maxLength="8"
                 autoComplete="on"
                 defaultValue=""
                 {...register("password", {
                   required: "Поле обязательно для заполнения",
                   minLength: { value: 4, message: "Password должен содержать минимум 5 символов" },
                   maxLength: { value: 30, message: "Password не может превышать 8 символов" },
                 })}
            />
          </label>
          <span className='register__inputmistake'>
              {errors?.password && <p className='register__inputmistake'>{errors?.password?.message || 'Error'}</p>}
          </span>
      </fieldset>
     {error?
        <p className='error-message'>{errorMessage}</p>
      : <></>}
        <button className={`'register__btn' ${isValid? 'register__btn_active': 'register__btn'}`} type='submit' disabled={!isValid}>Зарегистрироваться</button>
        <div className='register__wrapper'>
          <p className='register__subtitle'>Уже зарегистрированы?
          <Link className='register__entrylink' to="/signin"> Войти</Link></p>
        </div>
    </form>
    </section>
  );
}


export default Register;

