import React, {useState} from 'react'
import Axios from 'axios'
import { BASE_URL } from '../../Constants/Const';
import { useNavigate } from 'react-router-dom';
import Form from "../Form/Form"
import Email from "../Email/Email"
import { Input } from '@mui/material';
import "./style.css"
const Register = () => {
  
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [email, setEmail] = useState('');
  const [isStrong, setIsStrong] = useState("");
  const [error, setError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [errorType, setErrorType] = useState("")

  const navigate = useNavigate()
  
  const register = async() => {
        if(emailError === "Email is invalid"){
          setEmail("")
          setErrorType(emailError)
        }else{
        Axios.post(`${BASE_URL}/Register`,
        {username: usernameReg, password: passwordReg, email: email})
        .then(
          (response)=> {console.log(response);
            navigate("/Login")
        })
        .catch((err)=> {
        setErrorType("")
        if(err.response.data.err){
              if(err.response.data.err.keyValue.username){
                setError(err.response.data.err.keyValue.username)
                setErrorType("username")
              }else if(err.response.data.err.keyValue.email){
                setError(err.response.data.err.keyValue.email)
                setErrorType("email")
              }else if(err.response.data.err.errors.email){
                setError(err.response.data.err.keyValue.email)
                setErrorType("email invalid")
              }
        }else if(err.response.data.massage){
          setErrorType(err.response.data.massage)
          setError("נחסמת")
        }
      })
      }  
}

  const setEmailFunc = (childData) => {
    setEmail(childData)
  }

  const setEmailIsErrorFunc = (childData) => {
    setEmailError(childData)
  }

  return (
    <div className='Reg'>
      <div className='allReg'>
        <h1>הרשמה</h1>
        <Input type={'text'} placeholder='הכנס שם משתמש' onChange={(e)=>{setUsernameReg(e.target.value)}}></Input>
        <Form setPasswordReg={setPasswordReg} setIsStrong={setIsStrong}/>
        <Email
        email={email}
        setEmailFunc={setEmailFunc}
        emailValid={emailError}
        setEmailIsErrorFunc={setEmailIsErrorFunc}
        />
        {isStrong === "strong" ?  <button onClick={register}>הרשם</button> : <div></div>}
    </div>
    <div>{error ? errorType === "username" ? 
    " השם: " + error + " כבר תפוס, אולי תנסה שם אחר? " : errorType === "email" ? 
   "האימייל : " + error + " כבר בשימוש" : "נחסמת": <div></div>}</div>
    <div>
      <div>{errorType === "Email is invalid" ? "האימייל לא תקין" : <div></div>}</div>
    </div>
    </div>
    
  )
}

export default Register