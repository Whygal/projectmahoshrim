import React from "react";
import { Input } from "@mui/material";
export default function App({email, setEmailFunc, emailValid, setEmailIsErrorFunc}) {

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    if (isValidEmail(e.target.value)) {
        setEmailIsErrorFunc('Email is valid');
    } else {
        setEmailIsErrorFunc("Email is invalid");
    }
    setEmailFunc(e.target.value);
  };

  return (
    <div>
      <Input
        id="email"
        name="email"
        placeholder="הכנס כתובת אימייל"
        value={email}
        onChange={handleChange}
      />
    </div>
  );
}