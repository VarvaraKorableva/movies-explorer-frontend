import React from 'react'
import './AboutProject.css'

function AboutProject() {
  return ( 
    <div className='aboutproject'>
      <h3 className='aboutproject__title'>О проекте</h3>

      <ul className='aboutproject__discriptionlist'>
        <li className='aboutproject__discriptionlistcolumn'>
          <p className='aboutproject__texttitle'>Дипломный проект включал 5 этапов</p>
          <p className='aboutproject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='aboutproject__discriptionlistcolumn'>
          <p className='aboutproject__texttitle'>На выполнение диплома ушло 5 недель</p>
          <p className='aboutproject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className='aboutproject__weekslist'>
        <li className='aboutproject__weekslistcolumnfirst'>
          <p className='aboutproject__firstweek'>1 неделя</p>
          <p className='aboutproject__weekslistlink'>Back-end</p>
        </li>
        <li className='aboutproject__weekslistcolumnsecond'>
          <p className='aboutproject__fourweek'>4 недели</p>
          <p className='aboutproject__weekslistlink'>Front-end</p>
        </li>
      </ul>

    </div>
  ) 
}

export default AboutProject;
