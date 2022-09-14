import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({projectData}) {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
              <div className='footer-logo'>
                  Design Steve.
              </div>
              <ul className='footer-links'>
                <li className='footer-header'>My Work</li>
                {projectData.map((project) => {
                return(
                  <li>
                  <Link to={`/${project.link}`} className='link-item'>
                    {project.description}
                  </Link>
                  </li>
                )
                })}
              </ul>
              <ul className='footer-links'>
                <li className='footer-header'>Extras</li>
                <Link to={`/`} className='link-item'>Extra 01</Link>
                <Link to={`/`} className='link-item'>Extra 02</Link>
                <Link to={`/`} className='link-item'>Extra 03</Link>
                <Link to={`/`} className='link-item'>Extra 04</Link>
              </ul>
              <ul className='footer-links'>
                <li className='footer-header'>About</li>
                <Link to={`/`} className='link-item'>Intro</Link>
                <Link to={`/`} className='link-item'>Process</Link>
                <Link to={`/`} className='link-item'>Abilities</Link>
                <Link to={`/`} className='link-item'>Goals</Link>
              </ul>
        </div>
        <hr className='line'/>
        <p className='footer-text'>This website is proudly made by me.</p>
    </div>
    </>
  )
}

export default Footer