import React, { useState } from 'react'
import Axios from 'axios'
import { BASE_URL } from '../../Constants/Const'

const ChangePass = () => {
  
    const [email, setEmail] = useState("")
    const [emailRes, setEmailRes] = useState("")
    const [input, setInput] = useState("")
  
    const ChangePass = ()=> {
        console.log(input);
        Axios.post(`${BASE_URL}/ChangePass/${input}`)
        .then((res)=> {
            console.log(res)
            setEmail(res.data.email)
            console.log(email);

        })
    }
    return (
    <div>
        <input placeholder='הקלד את כתובת המייל שלך' onChange={(e)=> {setInput(e.target.value)}}></input>
        <button onClick={()=> (ChangePass(input))}>שלח</button>
    </div>
  )
}

export default ChangePass