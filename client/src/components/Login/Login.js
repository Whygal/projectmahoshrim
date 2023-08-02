
import React, {useState, useContext} from 'react'
import MyContext from '../../Context';
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Constants/Const';
import { Input, Button } from '@mui/material';
import "./style.css"
const Login = () => {
    const dataFromContext = useContext(MyContext)
    
    const [passwordLog, setPasswordLog] = useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const [loginError, setLoginError] = useState("")
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
          dataFromContext.setIsManager(response.data.isManager)
          navigate("/Main") 
        }
      }
      ).catch((res)=> {
        if(res.response.data.error === "Wrong username and password combination")        
        setLoginError(res.response.data.error)
      })   
    }
  return (
    <div className='log'>
        <h1>התחברות</h1>
        <Input  sx={{margin: "3%"}} type={'text'} placeholder='שם משתמש' onChange={(e)=>{dataFromContext.setUsernameLog(e.target.value)}}/>
        <Input sx={{margin: "3%"}} type={'password'} placeholder='סיסמא' onChange={(e)=>{setPasswordLog(e.target.value)}}/>
        <Button sx={{margin: "3%"}} color="secondary" variant='contained' onClick={() => login()}>כניסה</Button>
        <br></br>
        <Link to='/Register'>עוד אין לך חשבון?</Link>
        <br></br>
        <Link to='/EmailJs'>שכחת סיסמא?</Link>

        <h1>{loginStatus}</h1>
        <h2>{loginError === "Wrong username and password combination" ? "שם המשתמש או הסיסמה אינם נכונים " : <div></div>}</h2>
    </div>
  )
}

export default Login