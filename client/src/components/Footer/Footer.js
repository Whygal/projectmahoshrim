import * as React from "react";
// import { Route } from "react-router-dom";

// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "../../static/images/logo.jpeg";
import "./Footer.css";
// import About from "../About/About";

const Footer = () => {
    // const about = require("../About/About.js")
  return (
    <div className="footer">
      <p>
        {/* <Route path="/About" element={<About />}>
          אודות
        </Route> */}
        {/* <a href={about}><button className="btn">אודות</button></a> */}
        {/* <button><h2>אודות</h2></button> */}
        {/* <Link to="../About/About.js">
        <button>Posts</button>
      </Link> */}
      <Link to="/About">
        <button>אודות</button>
      </Link>
      </p>
      <p>
        <h2>חייגו אלינו 050770770770</h2>
        <p>
          שלום חברים, שמי הרב שניאור אני מתעסק בחינוך 10 שנים, מדריך הורים ונותן
        </p>
      </p>

      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Footer;
