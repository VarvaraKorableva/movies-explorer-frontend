import React from 'react';
import './Techs.css'
//<img src={promoimg} alt="Логотип" className="header__logo" />


function Techs() {
  return ( 
    <div className='techs'>
      <h3 className='techs__title'>Технологии</h3>

      <h2 className='techs__name'>7 технологий</h2>
      <h3 className='techs__subname'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>

      <ul className='techs__listitems'>
        <li className='techs__listitem'><a className='techs__listitemlink'href='https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics' target='_blank'>HTML</a></li>
        <li className='techs__listitem'><a className='techs__listitemlink' href='https://developer.mozilla.org/ru/docs/Web/CSS' target='_blank'>CSS</a></li>
        <li className='techs__listitem'><a className='techs__listitemlink' href='https://developer.mozilla.org/ru/docs/Web/JavaScript' target="_blank">JS</a></li>
        <li className='techs__listitem'><a className='techs__listitemlink' href='https://ru.reactjs.org/' tartget='_blank'>React</a></li>
        <li className='techs__listitem'><a className='techs__listitemlink' href='https://git-scm.com/' target='_blank'>Git</a></li>
        <li className='techs__listitem'><a className='techs__listitemlink' href='https://expressjs.com/ru/' target='_blank'>Express.js</a></li>
        <li className='techs__listitem'><a className='techs__listitemlink' href='https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=controlhterms&utm_source=google&utm_campaign=gs_emea_israel_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624530&adgroup=115749707943&gclid=EAIaIQobChMIhoKlytGI-gIVF9Z3Ch0vYgyEEAAYASAAEgJ65vD_BwE' target='_blank'>MongoDB</a></li>
      </ul>
      
    </div>
  ) 
}

export default Techs;
