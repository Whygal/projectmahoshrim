import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import logo from "../../images/LOGO.jpg"
import login from '../../images/LOGIN.png'
import MyContext from '../../Context'
import { Breadcrumbs } from '@mui/material'

const Header = () => {
  const dataFromContext = useContext(MyContext)

  return (
    <nav className='header'>
        <div >
            <Link to='/Login'><img className='login-register' style={{borderRadius:'50%'}} src={login} alt=""></img></Link>
        </div>

        <div className='divLogoImg' >
            <Link to='/Main'><img className='logoImg' src={logo} alt=""></img></Link>
        </div>

        <div>{dataFromContext.name ? 'ברוך הבא '+dataFromContext.name  : <div></div>}</div>
          
        <div className='router'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to='/Main' className='line'>דף ראשי</Link>
            <Link to='/AskQuestion' className='line'>שאל את הרב</Link>
            <Link to='/VideoCourses' className='line'>כל השיעורים</Link>
            <Link to='/Tips' className='line'>טיפים</Link>
            <Link to='/Contact' className='line'>צור קשר</Link>
            {dataFromContext.isManager === true ? 
            <Link to='/UserManager' className='line'>עמוד מנהל</Link>
            : null}
            </Breadcrumbs>
        </div>
    </nav>
  )
}

export default Header