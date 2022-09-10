import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return ( 
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__links'>
          <li className='portfolio__link'>
            <p className='portfolio__linktext'>Статичный сайт</p>
            <a className='portfolio__arrow' href='https://varvara-from-moscow.github.io/how-to-learn/' target='blank'></a>
          </li>
          <li className='portfolio__link'>
            <p className='portfolio__linktext'>Адаптивный сайт</p>
            <a className='portfolio__arrow' href='https://varvara-from-moscow.github.io/russian-travel/' target='blank'></a>
          </li>
          <li className='portfolio__link'>
            <p className='portfolio__linktext'>Одностраничное приложение</p>
            <a className='portfolio__arrow' href='https://mestoapp.nomoredomains.xyz' target='blank'></a>
          </li>
        </ul>
    </div>
  ) 
}

export default Portfolio;
//              <src className='portfolio__arrow'></src>
