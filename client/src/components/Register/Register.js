import React from 'react'
import Axios from 'axios'
import { useState } from 'react'

const Register = () => {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [emailReg, setEmailReg] = useState('')



  const register = ()=> {
    Axios.post('http://localhost:8000/Register', 
    {username: usernameReg, password: passwordReg, email: emailReg})
    .then((response)=>{
    console.log(response); 
  })   
  }

  return (
    <div>
      <div>
        <h1>הרשמה</h1>
        <input type={'text'} placeholder='הכנס שם משתמש' onChange={(e)=>{setUsernameReg(e.target.value)}}></input>
        <input type={'password'} placeholder='הכנס סיסמא' onChange={(e)=>{setPasswordReg(e.target.value)}}></input>
        <input type={'email'} placeholder='הכנס כתובת אימייל' onChange={(e)=>{setEmailReg(e.target.value)}}></input>
        <button onClick={register}>הרשם</button>
    </div>
    </div>
  )
}

export default Register