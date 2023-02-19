import { Button, Typography } from "@mui/material";
import * as React from "react";
import { Link } from 'react-router-dom';
import logo from "../../static/images/logo.jpeg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/About" className="link" >
        אודות
       </Link>
       <Box className="text">
      <h2>חייגו אלינו 050770770770</h2>
      <p>
          שלום חברים, שמי הרב שניאור אני מתעסק בחינוך 10 שנים, מדריך הורים ונותן
      </p>
      </Box>
      <Link to="/About" className="link" >
      <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Footer;
