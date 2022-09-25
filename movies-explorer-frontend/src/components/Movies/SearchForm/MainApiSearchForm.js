import React from "react"
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { useForm } from "react-hook-form"

function MainApiSearchForm({ handleFindSavedMovieSubmit }) {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: "onBlur"});

  const onSubmitSavedMovie = data => {
    console.log('work')
    handleFindSavedMovieSubmit();
    reset();
  };

  return (
    <>
    <div className='searchform'>
      <form className='searchform__inside' onSubmit={handleSubmit(onSubmitSavedMovie)}>
        <div className='searchform__loop'></div>
        <fieldset className='searchform__fieldset'>
          <input className='searchform__input'
                 type='text'
                 placeholder="Фильм"

                 {...register("movie", {
                   required: "Нужно ввести ключевое слово",
                   minLength: { value: 1, message: "Должен быть введен минимум 1 символ" },
                   maxLength: { value: 30, message: "Название не может превышать 30 символов, пожалуйста, исправьте" },
                   pattern: /[а-яА-Яa-zA-ZёË\- ]{1,}/,
                 })}
            />
          <span className='searchform__inputmistake'>
            {errors?.movie && <p className='searchform__inputmistake'>{errors?.movie?.message || 'Error'}</p>}
          </span>
        </fieldset>
        <button className={`${isValid? 'searchform__button_active': 'searchform__button'}`} type='submit' disabled={!isValid}></button>
      </form>
    </div>
    <FilterCheckbox></FilterCheckbox>
    </>


    )
  }

  export default MainApiSearchForm;
