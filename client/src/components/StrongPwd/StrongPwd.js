import React from 'react'
import "./strongPwd.css";

const StrengthPwd = (props) => {

  const pwdValidate = props.password;
  
  const initPwdChecker = () => {
    let pwdCheck = 0;
    let validateRegex = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(pwdValidate)) {
        pwdCheck += 1;
      }
    });
    
    switch (pwdCheck) {
      case 0:
        return {
          strength: 0,
          val: "",
        };
      case 1:
        return {
          strength: 1,
          val: "weak",
        };
      case 2:
        return {
          strength: 2,
          val: "fair",
        };
      case 3:
        return {
          strength: 3,
          val: "good",
        };
      case 4:
        return {
          strength: 4,
          val: "strong",
        };
      default:
        return null;
    }
  };
//   {
//     props.actions(initPwdChecker().val);
//   }
  return (
    <>
      <div className="wrapper">
        <progress
          className={`pwd-checker-bar strength-${initPwdChecker().val}`}
          value={initPwdChecker().strength}
          max="4"
        />
        <br />
        <span className="pwd-label">
          {props.password && (
            <div>
              <span className={`label strength-${initPwdChecker().val}`}>
                Password strength validation:
                <strong>{initPwdChecker().val} </strong>
              </span>
            </div>
          )}
        </span>
      </div>
    </>
  );
};
export default StrengthPwd;