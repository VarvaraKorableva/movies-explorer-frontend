import React from "react"
import './SearchForm.css'

function MainApiSearchForm({ handleFindSavedMovieSubmit }) {

  const [keyWord, setKeyWord] = React.useState('')
  const [error, setError] = React.useState(false)
  const [checkBoxStatus, setCheckBoxStatus] = React.useState(false)

  React.useEffect(() => {
    const query = localStorage.getItem('keyWordSavedMovies')
    setKeyWord(query)
    const checkBox = JSON.parse(localStorage.getItem('checkBoxStatusSavedMovies'))
    setCheckBoxStatus(checkBox)
  },[])

  const handleCheckBoxChange = (e) => {
    setCheckBoxStatus(e.target.checked)
    handleFindSavedMovieSubmit(keyWord, e.target.checked)
  }

  const handleSearchInputChange = (e) => {
    setKeyWord(e.target.value)
    setError(false)
  }

  const onSubmitSavedMovie = (e) => {
    e.preventDefault()
    if (!keyWord) {
      setError(true)
    }else{
      setError(false)
      handleFindSavedMovieSubmit(keyWord, checkBoxStatus);
    }
  };

  return (
    <>
    <div className='searchform'>
      <form className='searchform__inside' onSubmit={onSubmitSavedMovie}>

        <div className='searchform__formwrapper'>
        <div className='searchform__loop'></div>
        <fieldset className='searchform__fieldset'>
          <input className='searchform__input'
                 type='text'
                 placeholder="Фильм"
                 autoComplete="off"
                 onChange={handleSearchInputChange}
                 value={keyWord || ''}
          />
          <span className='searchform__inputmistake'>
          {error ? 'Введите ключевое слово': ''}
          </span>
        </fieldset>
        <button
          className='searchform__button_active'
          type='submit'
          onChange={handleCheckBoxChange}
        >
        </button>
      </div>

      <div className='wrapper'>
        <label className='checkbox'>
          <input
            className='checkbox__input'
            type='checkbox'
            onChange={handleCheckBoxChange}
            checked={checkBoxStatus}
          >
          </input>
          <div className='checkbox__div'></div>
        </label>
        <p className='filtercheckbox'>Короткометражки</p>
      </div>

      </form>
    </div>

    </>
    )
  }

  export default MainApiSearchForm;
