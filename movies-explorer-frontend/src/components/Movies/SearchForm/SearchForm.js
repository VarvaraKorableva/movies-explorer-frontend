import React from "react"
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return ( 
    <>
    <div className='searchform'>
      <form className='searchform__inside'>
        <div className='searchform__loop'></div>
        <fieldset className='searchform__fieldset'>
          <input className='aboutme__input' type='text' placeholder="Фильм"></input>
        </fieldset>
        <button className='searchform__button' type='submit'></button>
      </form>
    </div>
    <FilterCheckbox></FilterCheckbox>
    </>


    ) 
  }
  
  export default SearchForm;
