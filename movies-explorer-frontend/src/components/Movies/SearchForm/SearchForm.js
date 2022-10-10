import React from "react"
import './SearchForm.css'
import './FilterCheckbox/FilterCheckbox.css'

function SearchForm({ handleFindNewMovieSubmit }) {

  const [keyWord, setKeyWord] = React.useState('')
  const [error, setError] = React.useState(false)
  const [checkBoxStatus, setCheckBoxStatus] = React.useState(false)

  React.useEffect(() => {
    const query = localStorage.getItem('keyWord')
    setKeyWord(query)
  },[])

  const onSubmitMovie = (e) => {
    e.preventDefault()
    if (!keyWord) {
      setError(true)
    }else{
      setError(false)
      handleFindNewMovieSubmit(keyWord, checkBoxStatus);
    }
  };

  const handleCheckBoxChange = (e) => {
    setCheckBoxStatus(e.target.checked)
  }
  const handleSearchInputChange = (e) => {
    setKeyWord(e.target.value)
    setError(false)
  }

  return (
    <>
    <div className='searchform'>
      <form className='searchform__inside' onSubmit={onSubmitMovie}>
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
        <button className='searchform__button_active' type='submit'></button>
      </form>
    </div>
    <div className='wrapper'>
      <label className='checkbox'>
        <input className='checkbox__input' type='checkbox' onChange={handleCheckBoxChange}></input>
        <div className='checkbox__div'></div>
      </label>
      <p className='filtercheckbox'>Короткометражки</p>
    </div>

    </>
    )
  }

  export default SearchForm;

