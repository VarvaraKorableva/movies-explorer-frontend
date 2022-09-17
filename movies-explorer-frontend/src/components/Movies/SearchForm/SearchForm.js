import React from "react"
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { useForm } from "react-hook-form"

function SearchForm({handleFindNewMovieSubmit}) {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: "onBlur"});

  const onSubmit = data => {
    handleFindNewMovieSubmit({
      password: data.password,
      email: data.email,
      name: data.name,
    });
    reset();
  };

  return (
    <>
    <div className='searchform'>
      <form className='searchform__inside' onSubmit={handleSubmit(onSubmit)}>
        <div className='searchform__loop'></div>
        <fieldset className='searchform__fieldset'>
          <input className='searchform__input'
                 type='text'
                 placeholder="Фильм"

                 {...register("movie", {
                   required: "Нужно ввести ключевое слово",
                   minLength: { value: 5, message: "Должно быть введено минимум 2 символа" },
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

  export default SearchForm;
