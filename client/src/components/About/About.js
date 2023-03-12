import React from 'react'
import "./style.css"
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import logo from "../../images/LOGO.jpg"

const About = () => {
   
  return (
    <div>
                <Typography variant="h2"className='about'>
                      <div className='headerAbout'>
                      אודות:
                      {/* <Box className='About'> */}
                      <img className='aboutLogoImage' src={logo} alt=""/>
                      {/* </Box> */}
                      </div>
                      </Typography>
                      <Typography variant='h5' >
                        <Box className='bodyAbout'>
                      <Box >
                      מאושרים נוסד במטרה להנגיש לעם את שיטתו החינוכית של המשיח - הרבי מלובביץ 
                      </Box>
                      <Box>
                    על ידי סיפוק מענה חינוכי להורים, מתבגרים, מורים, ומוסדות חינוך.
                    </Box>
                    <Box >
                    אנו מאמינים כי בתורתו של המשיח נמצאים כל התשובות לכל השאלות עבור חיים מאושרים - חיים של גאולה, והחזון שלנו להגיש אותם בצורה מקצועית פשוטה ומעשית. 
                    </Box>
                    <Box>
                    שאיפת מאושרים להגיע לכמה שיותר בתים יהודיים בעולם, ולעזור להם להגיע לחיים מאושרים עם עצמם ועם הילדים שלהם.
                    </Box>
                    <Box>
                        מאושרים החל כקבוצת הורים קטנה, אך הדרישה מהשטח גרמה לצמיחה ושגשוג מהירה. כיום מאושרים מפעיל את האתר היחודי הזה בו ניתן לקבל עצה טובה ומענה חינוכי לכל שאלה, וכן לשלוח שאלות נוספות ולהצטרף לקהילת מאושרים. 
                    </Box>
                    <Box>
                    בנוסף אנו מפעילים קבוצות ווצאפ עם טיפ חינוך יומי, הרצאות, מסלול הדרכה אישי, מרכז ייעוץ וטיפול, מחלקת הוצאה לאור.  
                    </Box>
                    <Box>
                        והכל כמובן להגיע לעיקר כל העיקרים ולהגשים את היעד הנכסף: גאולה אמיתית ושלימה מיד ממש. אמן!
                    </Box>
                    </Box>
                </Typography>
        </div>
  )
}

export default About