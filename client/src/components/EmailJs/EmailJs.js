import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Axios from 'axios'
import { BASE_URL } from '../../Constants/Const'

export const EmailJs = () => {
  const form = useRef();
  const [input, setInput] = useState("")
  const [email, setEmail] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    const changePass = ()=> {
      console.log(input);
      Axios.post(`${BASE_URL}/ChangePass/${input}`)
      .then((res)=> {
          console.log(res)
          setEmail(res.data.email)
          console.log(email);

      })
  }

    emailjs.sendForm('service_g27xxlf', 'template_0fkxlx3', form.current, 'DFitvbTmigteTy27S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label >הכנס כתובת מייל שאיתה נרשמת</label>
      <br></br>
      <input type="email" name="ReplayToEmailUser" onChange={(e)=> {setInput(e.target.value)}}/>
      {/* <input type={email === "" ? "" : "submit"} value="שלח" onClick={changePass(input)} /> */}
    </form>
  );
};