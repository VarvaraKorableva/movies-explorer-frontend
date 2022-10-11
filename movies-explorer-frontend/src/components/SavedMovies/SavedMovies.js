import React from 'react'
import MainApiSearchForm from '../Movies/SearchForm/MainApiSearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import * as MainApi from '../../utils/MainApi'
import Preloader from '../Preloader/Preloader'
import './SavedMovies.css'

function SavedMovies() {

  const [savedMovies, setSavedMovies] = React.useState([])
  const [keyWord, setKeyWord] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [toRenderMovies, setToRenderMovies] = React.useState([])
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const [isSearchComplited, setIsSearchComplited] = React.useState(false)

  const isEpmty = toRenderMovies.length === 0

React.useEffect(() => {
  MainApi.getSavedMovies()
  .then((data) => {
      localStorage.setItem('savedData', JSON.stringify(data.data))
      setSavedMovies(data.data)
      setToRenderMovies(data.data)
  })
  .catch((err) => {
    console.log(err);
  });
},[])

  const handleCardDelete = (savedMovie) => {
    MainApi.deleteMovies(savedMovie._id)
    MainApi.getSavedMovies()
    .then((data) => {
      setToRenderMovies(data.data)
      setSavedMovies(data.data)
      localStorage.setItem('savedData', JSON.stringify(data.data))
    })
      .catch((err) => {
        console.log(err);
      })
  }

function handleFindSavedMovieSubmit(keyWord, checkBoxStatus) {
    setIsSearchComplited(true)
    setIsLoading(true)
    setKeyWord(keyWord)
    setCheckboxStatus(checkBoxStatus)
    localStorage.setItem('keyWordInSaved', keyWord)
    localStorage.setItem('checkboxChange', checkBoxStatus)
    const movies = JSON.parse(localStorage.getItem('savedData'))
      setIsLoading(false)
      const moviesAfterFilter = filterItems(movies, keyWord)
      const moviesAfterFindShortMovies = handleFindShortMovies(moviesAfterFilter)
      checkboxStatus?
        setToRenderMovies(moviesAfterFindShortMovies)
        :
        setToRenderMovies(moviesAfterFilter)
    }

  function filterItems(movies, keyWord) {
    const queryMovies = Array.isArray(movies) ?
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
    <section>
      <MainApiSearchForm
          handleFindSavedMovieSubmit={handleFindSavedMovieSubmit}
      />
      {isLoading?
      <Preloader/>
      :
      isEpmty && isSearchComplited?
      <span className='movies__error'>По вашему запросу фильмов не найдено, попробуйте изменить запрос.</span>
      :
      <MoviesCardList
          savedMovies={savedMovies}
          toRenderMovies={toRenderMovies}
          keyWord={keyWord}
          handleCardDelete={handleCardDelete}
      />
      }
    </section>
  )
}

export default SavedMovies;
