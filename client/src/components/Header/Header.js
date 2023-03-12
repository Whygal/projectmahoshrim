import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import logo from "../../images/LOGO.jpg"
const login = require('../../images/LOGIN.png')
const main = require('../Main/Main')

const Header = () => {
  return (
    <nav className='header'>
        <div >
            <Link to='/Login'><img className='login-register' style={{borderRadius:'50%'}} src={login}></img></Link>
        </div>

        <div className='divLogoImg' >
            <Link to='/Main'><img className='logoImg' src={logo}></img></Link>
        </div>

        <div className='pages'>
            <Link to='/Main' className='line'><li>דף ראשי</li></Link>
            /
            <Link to='/AskQuestion' className='line'><li>שאל את הרב</li></Link>
            /
            <Link to='/VideoCourses' className='line'><li>כל השיעורים</li></Link>
            /
            <Link to='/Tips' className='line'><li>טיפים</li></Link>
            /
            <Link to='/Contact' className='line'><li>צור קשר</li></Link>
        </div>
    </nav>
  )
}

export default Header