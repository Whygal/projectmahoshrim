import React, {useContext, useState} from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Constants/Const';
import MyContext from '../../Context';

const Login = () => {
    const dataFromContext = useContext(MyContext)
    
    const [passwordLog, setPasswordLog] = useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const navigate = useNavigate()
    
    const login = ()=> {
      Axios.post(`${BASE_URL}/Login`, 
      {username: dataFromContext.usernameLog, password: passwordLog})
      .then((response)=>{
        if(response.data.message){
          setLoginStatus(response.data.message) 
        }else{
          console.log(response.data)
          setLoginStatus('ברוך הבא '+response.data.username)
          dataFromContext.setName(response.data.username)
          dataFromContext.setUserId(response.data._id)
          navigate("/Main") 
        }
      }
      )    
    }
  return (
    <div>
        <h1>התחברות</h1>
        <input type={'text'} placeholder='שם משתמש' onChange={(e)=>{dataFromContext.setUsernameLog(e.target.value)}}></input>
        <input type={'password'} placeholder='סיסמא' onChange={(e)=>{setPasswordLog(e.target.value)}}></input>
        <button onClick={() => login()}>כניסה</button>
        <br></br>
        <Link to='/Register'>עוד אין לך חשבון?</Link>
        <h1>{loginStatus}</h1>
    </div>
  )
}

export default Login