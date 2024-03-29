import React from 'react';
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import './Movies.css'
import * as MoviesApi from '../../utils/MoviesApi'
import Preloader from '../Preloader/Preloader'

function Movies({ limit, addMovies, onDelete, onSave, savedMovies  }) {

  const [isLoading, setIsLoading] = React.useState(false)
  const [keyWord, setKeyWord] = React.useState('')
  const [searchMessage, setSearchMessage] = React.useState('')
  const [isSearchComplited, setIsSearchComplited] = React.useState(false)
  const [toRenderMovies, setToRenderMovies] = React.useState([])
  const [isError, setIsError] = React.useState(false)

  const isEpmty = toRenderMovies.length === 0
  const isDisappear = toRenderMovies.length <= limit

  function handleFindNewMoviesDataSubmit (keyWord, checkBox) {
    setIsSearchComplited(true)
    setKeyWord(keyWord)
    localStorage.setItem('keyWord', keyWord)
    localStorage.setItem('checkBoxStatus', checkBox)
    const moviesData = JSON.parse(localStorage.getItem('moviesData'))
    const moviesAfterFilter = filterItems(moviesData, keyWord)
      localStorage.setItem('moviesAfterFilter', JSON.stringify(moviesAfterFilter))
      const moviesAfterFindShortMovies = handleFindShortMovies(moviesAfterFilter)
      localStorage.setItem('moviesAfterFindShortMovies', JSON.stringify(moviesAfterFindShortMovies))
      checkBox?
        setToRenderMovies(moviesAfterFindShortMovies)
        :
        setToRenderMovies(moviesAfterFilter)
  }

  function handleFindNewMovieSubmit (keyWord, checkBox) {
    setIsSearchComplited(true)
    setIsLoading(true)
    setKeyWord(keyWord)
    localStorage.setItem('keyWord', keyWord)
    localStorage.setItem('checkBoxStatus', checkBox)

    MoviesApi.getMovies()
    .then((data) => {
      setIsLoading(false)
      const movie = data
      localStorage.setItem('moviesData', JSON.stringify(data))
      const moviesAfterFilter = filterItems(movie, keyWord)
      localStorage.setItem('moviesAfterFilter', JSON.stringify(moviesAfterFilter))
      const moviesAfterFindShortMovies = handleFindShortMovies(moviesAfterFilter)
      localStorage.setItem('moviesAfterFindShortMovies', JSON.stringify(moviesAfterFindShortMovies))
      checkBox?
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

React.useEffect(() => {
  const moviesAfterFilter = JSON.parse(localStorage.getItem('moviesAfterFilter'))
  const moviesAfterFindShortMovies = JSON.parse(localStorage.getItem('moviesAfterFindShortMovies'))
  const checkBox = JSON.parse(localStorage.getItem('checkBoxStatus'))

  !(localStorage.getItem('moviesAfterFilter')) ?
  setToRenderMovies([])
  :
  (checkBox?
    setToRenderMovies(moviesAfterFindShortMovies)
    :
    setToRenderMovies(moviesAfterFilter)
  )
}, [])

  return (
    <>
      {isLoading?
      <Preloader/>
      :
      <section className='main'>
      <SearchForm
        handleFindNewMovieSubmit={handleFindNewMovieSubmit}
        handleFindNewMoviesDataSubmit={handleFindNewMoviesDataSubmit}
        keyWord={keyWord}
      />
      {isError?
      <span className='movies__error'>{searchMessage}</span>:
      isEpmty && isSearchComplited?
      <span className='movies__error'>К сожалению, по вашему запросу фильмов не найдено, попробуйте изменить запрос.</span>
      :
      <MoviesCardList
        limit={limit}
        beatfilmMovies={toRenderMovies}
        savedMovies={savedMovies}
        keyWord={keyWord}
        onDelete={onDelete}
        onSave={onSave}
      />
      }
      {isDisappear?
      <></>
      :
      <button className='movies__btn' onClick={addMovies}>Еще</button>
      }
      </section>
      }
    </>
  )
}

export default Movies;
