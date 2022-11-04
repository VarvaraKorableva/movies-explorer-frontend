import React from 'react'
import './NotFoundPage.css'
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className='notfoundpage'>
      <h1 className='notfoundpage__title'>404</h1>
      <h2 className='notfoundpage__subtitle'>Страница не найдена</h2>
      <Link to="/" className='notfoundpage__backlink'>
        <p>Назад</p>
      </Link>
    </section>
  )
}

export default NotFoundPage;
