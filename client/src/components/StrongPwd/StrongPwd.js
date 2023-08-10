import React from 'react'
import "./strongPwd.css";

const StrongPwd = (props) => {

  const pwdValidate = props.password;

  const initPwdChecker = () => {
    let pwdCheck = 0;
    const validateRegex = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
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
          val: "חלש",
        };
      case 2:
        return {
          strength: 2,
          val: "בסדר",
        };
      case 3:
        return {
          strength: 3,
          val: "טוב",
        };
      case 4:
        return {
          strength: 4,
          val: "חזק",
        };
      default:
        return null;
    }
  };

  return (
      <div className="wrapper">
        <progress
          className={`pwd-checker-bar strength-${initPwdChecker().val}`}
          value={initPwdChecker().strength}
          max="4"
        />
        <br />
        <span className="pwd-label">
          {pwdValidate && (
            <div>
              <div className={`label strength-${initPwdChecker().val}`}>
                 רמת החוזק של הסיסמה: 
                <strong> {initPwdChecker().val} </strong>
              </div>
            </div>
          )}
        </span>
      </div>
  );
};
export default StrongPwd;