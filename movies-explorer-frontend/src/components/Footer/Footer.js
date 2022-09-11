import React from 'react'
import './Footer.css'

function Footer() {
  return ( 
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__container'>
        <p className='footer__date'>&copy; 2022</p>
        <div className='footer__wrapper'>
        <a className='footer__yandex' href='https://practicum.yandex.ru' target='blank'>Яндекс.Практикум</a>
        <a className='footer__link' href='https://github.com/Varvara-from-Moscow?tab=repositories' target='blank'>Github</a>
        </div>
      </div>
    </footer>  
  ) 
}

export default Footer;
