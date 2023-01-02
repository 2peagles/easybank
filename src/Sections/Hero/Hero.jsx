import React from 'react'
import { Navigation }  from './components/Navigation'
import '../../styles/Hero.scss'
const Hero = () => {
  return (
    <section className='hero_section'>
      <Navigation/>
      <div className='hero_container'>
      <div className='hero_text_container row '>
        <div className='hero_text'>
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online.Your Easybank account will be a one-stop for spending,
            saving, budgeting, investing, and much more.</p>
          <button className='btn'> Request Invite </button>
        </div>
      </div>
      <div className='hero_img'>
        {/* <img src='/images/image-mockups.png' alt='' /> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
