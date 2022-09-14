import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='navbar-container'>
              <div className='navbar-logo'>
                  Design Steve.
              </div>
              <ul className='navbar-links'>
                <li><Link to="/" className='link-item'>My work</Link></li>
                <li><Link to="/extras" className='link-item'>Extras</Link></li>
                <li><Link to="/" className='link-item'>About</Link></li>
                <li><Link to="/" className='link-item'>Contact</Link></li>
              </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar