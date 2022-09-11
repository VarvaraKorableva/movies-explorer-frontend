import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return ( 
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__links'>
          <li className='portfolio__link'>
            <a className='portfolio__linkcontainer' href='https://varvara-from-moscow.github.io/how-to-learn/' target='blank'>
              <p className='portfolio__linktext'>Статичный сайт</p>
              <div className='portfolio__arrow'></div>
            </a>
          </li>
          <li className='portfolio__link'>
            <a className='portfolio__linkcontainer' href='https://varvara-from-moscow.github.io/russian-travel/' target='blank'>
              <p className='portfolio__linktext'>Адаптивный сайт</p>
              <div className='portfolio__arrow'></div>
            </a>
          </li>
          <li className='portfolio__link'>
            <a className='portfolio__linkcontainer' href='https://mestoapp.nomoredomains.xyz' target='blank'>
              <p className='portfolio__linktext'>Одностраничное приложение</p>
              <div className='portfolio__arrow'></div>
            </a>
          </li>
        </ul>
    </div>
  ) 
}

export default Portfolio;
//              <src className='portfolio__arrow'></src>
