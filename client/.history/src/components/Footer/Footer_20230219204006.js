import * as React from "react";
import { Link } from 'react-router-dom';
import logo from "../../static/images/logo.jpeg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>חייגו אלינו 050770770770</h2>
      <Link to="/About">
        אודות
      </Link>
      <p>
          שלום חברים, שמי הרב שניאור אני מתעסק בחינוך 10 שנים, מדריך הורים ונותן
      </p>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Footer;
