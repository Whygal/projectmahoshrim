import { useState } from "react";
import React from "react";
import StrongPwd from "../StrongPwd/StrongPwd"
import { Input } from "@mui/material";
import "./style.css"
const Form = ({setPasswordReg, setIsStrong}) => {
    const [pwdInput, setPwdInput] = useState({password: ""});
    const [isError, setError] = useState(null);
    
    const passwordLen = (password) => {
      return 10 - password.length 
    }
    const onChange = (e) => {
      let password = e.target.value;
      setPwdInput({password: password});
      setPasswordReg(password)
      const crntLen = passwordLen(password)

      // Error Handler
      setError(null);
      let caps, small, num, specialSymbol;
      
      if (password.length < 10) {
        setError(" הסיסמה חייבת להיות באורך 10 תווים לפחות, חסרים עוד " + crntLen + " תווים ");
        setIsStrong("")
      } else {
        caps = (password.match(/[A-Z]/g) || []).length;
        small = (password.match(/[a-z]/g) || []).length;
        num = (password.match(/[0-9]/g) || []).length;
        specialSymbol = (password.match(/\W/g) || []).length;
        if (caps < 1) {
          setError("חייב להשתמש באות גדולה באנגלית!");
          console.log(small);
        } else if (small < 1) {
          setError("חייב להשתמש באות קטנה באנגלית!");
        } else if (num < 1) {
          setError("חייב להוסיף מספר!");
        } else if (specialSymbol < 1) {
          setError("חייב להוסיף סימון מיוחד: @$! % * ? &");
        } else {
          setIsStrong("strong");
        }
      }
    };

    return (
      <div className="center">
        <form className="flex">
          <label>
          </label>
          {isError !== null && <p className="errors"> - {isError}</p>}
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="הכנס סיסמה"
            onChange={(e)=>onChange(e)}
            required
          />
          <StrongPwd 
          password={pwdInput.password}
           />
        </form>
      </div>
    );
  };
  export default Form;
