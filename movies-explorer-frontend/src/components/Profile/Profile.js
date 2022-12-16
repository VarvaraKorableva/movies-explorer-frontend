import React from 'react'
import './Profile.css'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function Profile({ handleSignOut, changeUserInfoSubmit, error, errorChangeProfileMessage, changeProfileMessage }) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [errorName, setErrorName] = React.useState('')
  const [errorEmail, setErrorEmail] = React.useState('')
  const [isInputDisabled, setIsInputDisabled] = React.useState(true)
  const [isFormValid, setIsFormValid] = React.useState(false)
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    setName(currentUser.name)
    setEmail(currentUser.email)
  }, [currentUser])

  const handleNameChange = (e) => {
    const validName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(
      e.target.value
    )

    if (!e.target.value.length) {
      setErrorName('Имя пользователя должно быть заполнено.')
     } else if (e.target.value.length < 2) {
       setErrorName('Имя пользователя должно быть не менее 2 символов.')
     } else if (!validName) {
       setErrorName('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
     } else if (validName) {
       setErrorName('')
     } else if (e.target.value.length > 30) {
       setErrorName('Имя пользователя должно быть не более 30 символов.')
     } else {
       setErrorName('')
     }
     setName(e.target.value)
   }

   const handleEmailChange = (e) => {
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e.target.value
    )

    if (!e.target.value.length) {
      setErrorEmail('Электронная почта должна быть заполнена.')
    } else if (!validEmail) {
      setErrorEmail('Неверный формат электронной почты.')
    } else {
      setErrorEmail('')
    }
    setEmail(e.target.value)
  }

  const handleInputDisabled = () => {
    setIsInputDisabled(!isInputDisabled)
  }

  const handleSubmitProfileForm = (e) => {
    e.preventDefault()
    changeUserInfoSubmit({ name, email })
    handleInputDisabled()
  }

  React.useEffect(() => {
    if (errorName || errorEmail) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errorEmail, errorName])

  React.useEffect(() => {
    if (name === currentUser.name && email === currentUser.email) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [currentUser.email, currentUser.name, email, name])

  return (
    <div className='profile'>
      <form className='profile__form' onSubmit={handleSubmitProfileForm}>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <label className='profile__label'>Имя
          <input className='profile__input'
            value={name || ''}
            name='name'
            type='text'
            placeholder="Имя"
            onChange={handleNameChange}
            disabled={!isInputDisabled}
          />
        </label>
        <span className='profile__inputmistake'>
        {errorName}
        </span>

        <label className='profile__label'>E-mail
          <input className='profile__input'
              value={email || ''}
              name='email'
              type='text'
              placeholder="Email"
              onChange={handleEmailChange}
              disabled={!isInputDisabled}
          />
        </label>
        <span className='profile__inputmistake'>
        {errorEmail}
        </span>

        {error?
        <p className='profile__inputmistake'>{errorChangeProfileMessage}</p>
        :
        <p className='profile__inputmistake'>{changeProfileMessage}</p>
        }

        <button
              className=
              'profile__btn'
              type='submit'
              disabled={!isFormValid}
              onClick={handleInputDisabled}
            >
              Редактировать
            </button>
      </form>
      <div className='profile__wrapper'>
        <button className='profile__entrybtn' onClick={handleSignOut}>Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;
