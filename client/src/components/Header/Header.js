import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import logo from "../../images/LOGO.jpg"
import login from '../../images/LOGIN.png'
import MyContext from '../../Context'


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
            
            {/* {dataFromContext.isManager === true ? <div>hi</div>: <div></div>} */}
        </div>
    </nav>
  )
}

export default Header