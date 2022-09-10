import React from "react"
import './FilterCheckbox.css'

function FilterCheckbox() {
  return ( 
    <div className='wrapper'>
      <label className='checkbox'>
        <input className='checkbox__input' type='checkbox'></input>
        <div className='checkbox__div'></div>
      </label>
      <p className='filtercheckbox'>Короткометражки</p>
    </div>
    ) 
  }
  
  export default FilterCheckbox;
