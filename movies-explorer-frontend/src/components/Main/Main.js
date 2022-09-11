import React from 'react'
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import './Main.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Main({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className='main'>
        <Promo/>
        <AboutProject/>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </>    
  )
}
  
export default Main;
