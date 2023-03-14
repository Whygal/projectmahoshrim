import React, {useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';

const Login = () => {

  const [usernameLog, setUsernameLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const login = ()=>{
    Axios.post("http://localhost:8000/Login", {username: usernameLog, password: passwordLog}).then((response)=> {
      console.log(response);
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus("ברוך הבא "+response.data.username)
      }
    })
  }
  
  
  return (
    <div>
      <input type='text' placeholder='שם משתמש' onChange={(e)=> {setUsernameLog(e.target.value)}}></input>
      <input type='password' placeholder='סיסמא' onChange={(e)=> {setPasswordLog(e.target.value)}}></input>
      <button onClick={login}>התחבר</button>
      <div>{loginStatus}</div>
      <Link to='/Register'>?עוד אין לך חשבון</Link>
    </div>
  )
}

export default Login