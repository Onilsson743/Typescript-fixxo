import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconLinks from '../smallComponents/IconLinks'

const Navbar: React.FC = () => {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div id='navbar' className='top-navbar '>
      <div className='_container _navbar'>
        
        <h1 className='logo'>Fixxo.</h1>
        
        <section className={`navbar-menu ${showMenu ? "display" : ""}`} >
          <NavLink className='navbar-link' to='/' end>Home</NavLink>
          <NavLink className='navbar-link' to='/Categories' end>Categories</NavLink>
          <NavLink className='navbar-link' to='/Products' end>Products</NavLink>
          <NavLink className='navbar-link' to='/contacts' end>Contacts</NavLink>
        </section>

        <section className='navbar-icons'>
          <IconLinks hideMobile = {false} link = "/serch"  icon = "fa-regular fa-magnifying-glass" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-arrows-repeat" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-heart" number={10} />
          <IconLinks hideMobile = {false} icon = "fa-regular fa-bag-shopping" />
          
          <button className={`mobile-menu ${showMenu ? "mobile-menu-open" : ""}`} onClick={toggleMenu}></button>
        </section>
        

        
        
      </div>
    </div>
  )
}

export default Navbar