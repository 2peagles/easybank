import React, { useState } from 'react'
import { navdata } from './navdata'
import '../../../styles/_layout.scss';
import '../../../styles/Nav.scss';
export const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  return (
    // dekstop menu 
    <section className='nav-container'>
      <img src='/images/logo.svg' alt='logo' className='' />
      <div className='row desktopnav'>
        {navdata.map((item, index) => {
          return (
            <div key={index} item={item.title} className='navlinks'>{item.title}</div>
          )
        })}
      </div>
      <button className='btn desktopnav'>request invite</button>

      {/* mobile menu */}

      <div onClick={handleClick} id='menu' className='menumobile'>
        {!menu ? <img src='images/icon-hamburger.svg' alt='hamburger' /> : <img src='images/icon-close.svg' alt='exit icon' />}
      </div>


      <div className={!menu ? 'mobilenav' : 'mobilenavcontainer'}>
        {/* <img src='/images/logo.svg' alt='logo' /> */}
        <div className='mobilenav_items'>
          {navdata.map((item, index) => {
            return (
              <nav key={index} item={item.title} className='navlinks'>{item.title}</nav>
            )
          })}
        </div>

      </div>
    </section>
  )
}
