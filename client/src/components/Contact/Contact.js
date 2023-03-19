import React from 'react'
import "./style.css"
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
const Contact = () => {

  const text1 = " מספר הוואטסאפ של 'מאושרים' הוא"
  const text2 = " 'מייל של 'מאושרים"
  const text3 = " חשבונות הגיט של המפתחים "
  return (
    <Typography variant="h5" className='contact'>
      <Box className="detail">
         <a href="tel:+972 58-433-1384">+972 58-433-1384</a> {text1}
      </Box>
      <Box className="detail">
         <a href='mailto:meusharim5781@gmail.com'>meusharim5781@gmail.com</a> {text2}
      </Box>
      <Box className="detail">
         <a href='https://github.com/Whygal'>https://github.com/Whygal</a> <span>Yaniv Galili:</span>
         <a href='https://github.com/IsraelEidan'>https://github.com/IsraelEidan</a> <span>Israel Eidan:</span> 
         <a href='https://github.com/YarinSweed'>https://github.com/YarinSweed</a> <span>Yarin Sweed:</span>  {text3}
      </Box>
    </Typography>
  )
}

export default Contact