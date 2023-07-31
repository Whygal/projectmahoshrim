import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { BASE_URL } from '../../Constants/Const';
const Register = () => {
  
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const navigate = useNavigate();

  const register = ()=> {
    Axios.post(`${BASE_URL}/Register`,
    {username: usernameReg, password: passwordReg, email: emailReg})
    .then((response)=> {
    console.log(response);
    if(response){
      navigate('/Login')
    }
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