import React from 'react'
import './Profile.css'
import * as mainApi from '../../utils/MainApi'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import { useForm } from "react-hook-form"


/**
 *
Нужна ф-ция отправки исправленных данных в бд
доделать валидацию (сообщения об ошибке+ обработка ошибки по паттерну)
 */


function Profile({ handleSignOut, changeUserInfoSubmit }) {

  const currentUser = React.useContext(CurrentUserContext);
  //const [currentUser, setCurrentUser] = React.useState({});
/*
  React.useEffect(() => {
    mainApi.getUserInfo()
    .then((data) => {
      setCurrentUser(data.user);
      console.log(currentUser);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  function changeUserInfoSubmit(userData) {
    mainApi.changeUserInfo(userData)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }*/

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: "onBlur"});

  const onSubmit = data => {
     changeUserInfoSubmit({
      name: data.name,
      email: data.email,
    });
    reset();
  };

  return (
    <div className='profile'>
      <form className='profile__form' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <label className='profile__label'>Имя
          <input className='profile__input'
            placeholder={currentUser.name}
            {...register("name", {
              required: "Поле обязательно для заполнения",
              minLength: { value: 2, message: "Имя должно содержать минимум 2 знаков, пожалуйста, исправьте" },
              maxLength: { value: 30, message: "Имя не может превышать 30 символов, пожалуйста, исправьте" },
              pattern: /[а-яА-Яa-zA-ZёË\- ]{1,}/,
            })}
          />
        </label>
        <span className='profile__inputmistake'>
          {errors?.name && <p className='profile__inputmistake'>{errors?.name?.message || 'Error'}</p>}
        </span>

        <label className='profile__label'>E-mail
          <input className='profile__input'
            placeholder={currentUser.email}
                 {...register("email", {
                   required: "Поле обязательно для заполнения",
                   minLength: { value: 4, message: "E-mail должен содержать минимум 4 символа" },
                   maxLength: { value: 30, message: "E-mail не может превышать 30 символов" },
                   pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                 })}
          />
        </label>
        <span className='profile__inputmistake'>
          {errors?.email && <p className='profile__inputmistake'>{errors?.email?.message || 'Error'}</p>}
        </span>

        <button className={`'profile__btn' ${isValid? 'profile__btn_active': 'profile__btn'}`}
                type='submit'
                disabled={!isValid}
                >Редактировать</button>
      </form>
      <div className='profile__wrapper'>
        <button className='profile__entrybtn' onClick={handleSignOut}>Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;
