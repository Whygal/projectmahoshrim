import React from 'react'

const logo = require('../../images/LOGO.jpg') 

const Header = () => {
  return (
    <nav>
        <button>הרשמה</button>
        <button>התחברות</button> 
        <img className='logoImg' src={logo}></img>



    </nav>
  )
}

export default Header