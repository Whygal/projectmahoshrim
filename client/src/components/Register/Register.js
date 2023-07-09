import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { BASE_URL } from '../../Constants/Const';
import { useNavigate } from 'react-router-dom';
import Form from "../Form/Form"
const Register = () => {
  
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [error, setError] = useState("")
  const [errorType, setErrorType] = useState("")
  const [test, setTest] = useState("")
  const navigate = useNavigate()

  const register = async()=> {
    Axios.post(`${BASE_URL}/Register`,
    {username: usernameReg, password: passwordReg, email: emailReg})
    .then(
      (response)=> {console.log(response);
        navigate("/Login")
    }).catch((err)=> {
    console.log(err)
    setErrorType("")
    if(err.response.data.err){
     if(err.response.data.err.keyValue.username){
      setError(err.response.data.err.keyValue.username)
      setErrorType("username")
     }else if(err.response.data.err.keyValue.email){
      setError(err.response.data.err.keyValue.email)
      setErrorType("email")
     }
    }else if(err.response.data.massage){
      setErrorType(err.response.data.massage)
      setError("נחסמת")
    }
  })
  }

  const passwordCheck = (e) => {
    setTest(e.target.value)
    const azLowerCase = "abcdefghijklmnopqrswvtuxzy"
    const azUpperCase = "ABCDEFGHIJKLMNOPQRSWVUTXWZ"
    const spicelSymbol = "!@#$%^&*()\"\"\\ /?_-+=|`~ "
    const numbers = "123456789"
    
    //  for(let i = 0; test.length() < i; i++){
    //   if(azLowerCase.includes(test[i])){
    //     console.log("here")
    //   }
    //  }
    }
  return (
    <div>
      <div>
        <h1>הרשמה</h1>
        <input type={'text'} placeholder='הכנס שם משתמש' onChange={(e)=>{setUsernameReg(e.target.value)}}></input>
        <input type={'password'} placeholder='הכנס סיסמא' onChange={(e)=>{setPasswordReg(e.target.value)}}></input>
        <input type={'email'} placeholder='הכנס כתובת אימייל' onChange={(e)=>{setEmailReg(e.target.value)}}></input>
        <button onClick={register}>הרשם</button>
        {/* <input type={'password'} placeholder="test" onChange={(e)=>{passwordCheck(e)}}></input> */}
    </div>
    <div>{error ? errorType === "username" ? 
    " השם: " + error + " כבר תפוס, אולי תנסה שם אחר? " : errorType === "email" ? 
   "האימייל : " + error + " כבר בשימוש" : "נחסמת": <div></div>}</div>
    <div>
      <Form/>
    </div>
    </div>
    
  )
}

export default Register