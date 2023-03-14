import React, {useState} from 'react'
import Axios from 'axios'


const Register = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const register = ()=> {
    Axios.post("http://localhost:8000/Register", {username: usernameReg, password: passwordReg, email: emailReg}).then((response)=> {
      console.log(response);
    })
  }



  return (
    <div>
      <h1>הרשמה</h1>
      <input type='text' placeholder='הכנס שם משתמש'  onChange={(e)=> {setUsernameReg(e.target.value)}}></input>
      <input type='password' placeholder='הכנס סיסמא'  onChange={(e)=> {setPasswordReg(e.target.value)}}></input>
      <input type='text' placeholder='הכנס אימייל' onChange={(e)=> {setEmailReg(e.target.value)}}></input>
      <button onClick={register}>הירשם</button>
    </div>
  )
}

export default Register