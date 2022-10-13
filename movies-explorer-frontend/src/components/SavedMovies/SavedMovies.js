import React from 'react'
import MainApiSearchForm from '../Movies/SearchForm/MainApiSearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import * as MainApi from '../../utils/MainApi'
import Preloader from '../Preloader/Preloader'
import './SavedMovies.css'

function SavedMovies({handleSavedCardDelete, savedMovies }) {

  const [keyWord, setKeyWord] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [toRenderMovies, setToRenderMovies] = React.useState([])
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const [isSearchComplited, setIsSearchComplited] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [searchMessage, setSearchMessage] = React.useState('')

  const isEpmty = toRenderMovies.length === 0

/*
  React.useEffect(() => {
      setToRenderMovies(savedMovies)
  },)*/
/*
  React.useEffect(() => {
    MainApi.getSavedMovies()
    .then((data) => {
      //localStorage.setItem('savedData', JSON.stringify(data.data))
      setToRenderMovies(data)
      setSavedMovies(data)
    })
    .catch((err) => {
      console.log(err);
    });
  },)
*/

/*
  localStorage.removeItem('moviesAfterFindShortMovies')
  localStorage.removeItem('moviesAfterFilter')*/

function handleFindSavedMovieSubmit(keyWord, checkBoxStatus) {
    setIsSearchComplited(true)
    setIsLoading(true)
    setKeyWord(keyWord)
    setCheckboxStatus(checkBoxStatus)
    localStorage.setItem('keyWordInSaved', keyWord)
    localStorage.setItem('checkboxChange', checkBoxStatus)
    MainApi.getSavedMovies()
    .then((data) => {
      setIsLoading(false)
      const moviesAfterFilter = filterItems(data.data, keyWord)
      //localStorage.setItem('moviesAfterFilter', JSON.stringify(moviesAfterFilter))
      const moviesAfterFindShortMovies = handleFindShortMovies(moviesAfterFilter)
      //localStorage.setItem('moviesAfterFindShortMovies', JSON.stringify(moviesAfterFindShortMovies))

      checkboxStatus?
        setToRenderMovies(moviesAfterFindShortMovies)
      :
        setToRenderMovies(moviesAfterFilter)
    })
    .catch((err) => {
      setIsError(true)
      setSearchMessage(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
      )
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false)
    })
    }


    function filterItems(movies, keyWord) {
      const queryMovies = Array.isArray(movies)?
      movies.filter((item) => {
        return (
          item.nameRU.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
        )
      })
      : []
      return queryMovies
    }

  function handleFindShortMovies(movies) {
    return movies.filter((item) => item.duration < 40)
  }

  return (
    <>
    {isLoading?
    <Preloader/>
    :
    <section>
      <MainApiSearchForm
          handleFindSavedMovieSubmit={handleFindSavedMovieSubmit}
      />
      {isError?
      <span className='movies__error'>{searchMessage}</span>:
      isEpmty && isSearchComplited?
      <span className='movies__error'>К сожалению, по вашему запросу фильмов не найдено, попробуйте изменить запрос.</span>
      :
      <MoviesCardList
        savedMovies={savedMovies}
        toRenderMovies={toRenderMovies}
        keyWord={keyWord}
        handleSavedCardDelete={handleSavedCardDelete}
      />
      }
    </section>
    }
    </>
  )
}

export default SavedMovies;
