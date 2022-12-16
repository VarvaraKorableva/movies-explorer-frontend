import React from 'react'
import './AboutMe.css'
import { Link } from 'react-router-dom';

function AboutMe() {
  return ( 
    <div className='aboutme'>

      <h3 className='aboutme__title'>Студент</h3>
      <div className='aboutme__container'>
        <div>  
          <h2 className='aboutme__name'>Варвара</h2>
          <p className='aboutme__age'>Фронтенд-разработчик, 31 год</p>
          <p className='aboutme__discription'>Родилась и всю жизнь прожила в Москве, сейчас живу в Израиле, в Хайфе. 
           У меня классная семья- любимый муж и ребенок ради которых я готова на все.
           Люблю читать, рисовать, путешествовать, шоппинг, серфинг и кодинг. 
           Жду того момента, когда попаду к классную команду разработчиков, 
           с которыми мы будем создавать новые, крутые и качественные проекты.</p>
          <a className='aboutme__link' href='https://github.com/Varvara-from-Moscow' target='blank'>
            Github
          </a>
        </div>
        <div className='aboutme__mypic'></div>
      </div>
    </div>
  ) 
}

export default AboutMe;
