import React from 'react'
import './NotFoundPage.css'

function NotFoundPage() {
  return ( 
    <div className='notfoundpage'>
      <h1 className='notfoundpage__title'>404</h1>
      <h2 className='notfoundpage__subtitle'>Страница не найдена</h2>
      <p className='notfoundpage__backlink'>Назад</p>
    </div>
  ) 
}

export default NotFoundPage;
