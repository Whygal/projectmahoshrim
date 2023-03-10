import React, {useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [usernameLog, setUsernameLog] = useState('')
    const [passwordLog, setPasswordLog] = useState('')
    const [loginStatus, setLoginStatus] = useState('')

    const login = ()=> {
      Axios.post('http://localhost:8000/Login', 
      {username: usernameLog, password: passwordLog})
      .then((response)=>{
        if(response.data.message){
          setLoginStatus(response.data.message)
        }else{
          console.log(response.data)
          setLoginStatus('ברוך הבא '+response.data.username)
          window.location.href = "http://localhost:3000/Main";  
        }
      }
      )    
    }
  return (
    <div>
        <h1>התחברות</h1>
        <input type={'text'} placeholder='שם משתמש' onChange={(e)=>{setUsernameLog(e.target.value)}}></input>
        <input type={'password'} placeholder='סיסמא' onChange={(e)=>{setPasswordLog(e.target.value)}}></input>
        <button onClick={login}>כניסה</button>
        <br></br>
        <Link to='/Register'>עוד אין לך חשבון?</Link>
        <h1>{loginStatus}</h1>
    </div>
  )
}

export default Login