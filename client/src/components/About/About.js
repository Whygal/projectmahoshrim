import React from 'react'
import "./style.css"
import { Card, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const logo = require('../../images/LOGO.jpg') 

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const About = () => {
   
  return (
      <CacheProvider value={cacheRtl}>
                <Typography variant="h2">
                    <Box>
                      <div className='headerAbout'>
                      אודות:
                      {/* <Box className='About'> */}
                      <img className='aboutLogoImage' src={logo} alt=""/>
                      {/* </Box> */}
                      </div>
                      <div className='bodyAbout'>
                        <div className='textBodyAbout'>
                      מאושרים נוסד במטרה להנגיש לעם את שיטתו החינוכית של המשיח - הרבי מלובביץ'. 
                      על ידי סיפוק מענה חינוכי להורים, מתבגרים, מורים, ומוסדות חינוך.
                      אנו מאמינים כי בתורתו של המשיח נמצאים כל התשובות לכל השאלות עבור חיים מאושרים - חיים של גאולה,
                      והחזון שלנו להגיש אותם בצורה מקצועית פשוטה ומעשית. 
                      שאיפת מאושרים להגיע לכמה שיותר בתים יהודיים בעולם,
                      ולעזור להם להגיע לחיים מאושרים עם עצמם ועם הילדים שלהם.
                      מאושרים החל כקבוצת הורים קטנה, אך הדרישה מהשטח גרמה לצמיחה ושגשוג מהירה. כיום מאושרים מפעיל את האתר היחודי הזה בו ניתן לקבל עצה טובה ומענה חינוכי לכל שאלה, וכן לשלוח שאלות נוספות ולהצטרף לקהילת מאושרים. 
                      בנוסף אנו מפעילים קבוצות ווצאפ עם טיפ חינוך יומי, הרצאות, מסלול הדרכה אישי, מרכז ייעוץ וטיפול, מחלקת הוצאה לאור.  
                      והכל כמובן להגיע לעיקר כל העיקרים ולהגשים את היעד הנכסף:<strong>גאולה אמיתית ושלימה מיד ממש. אמן!</strong>
                      </div>
                    </div>
                    
                    </Box>
                </Typography>
        </CacheProvider>
        
  )
}

export default About