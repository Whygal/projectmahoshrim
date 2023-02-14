import React from 'react'
import "./style.css"
import { Card, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

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
                      <Box className='About'>
                      <img src={require('./meusharimImg.jpg')} alt=""/>
                      </Box>
                      </div>
                      <div className='bodyAbout'>
                      <Box className='About'>
                      מאושרים נוסד במטרה להנגיש לעם את שיטתו החינוכית של המשיח - הרבי מלובביץ 
                      </Box>
                      <Box className='About'>
                    על ידי סיפוק מענה חינוכי להורים, מתבגרים, מורים, ומוסדות חינוך.
                    </Box>
                    <Box className='About'>
                    אנו מאמינים כי בתורתו של המשיח נמצאים כל התשובות לכל השאלות עבור חיים מאושרים - חיים של גאולה, והחזון שלנו להגיש אותם בצורה מקצועית פשוטה ומעשית. 
                    </Box>
                    <Box className='About'>
                    שאיפת מאושרים להגיע לכמה שיותר בתים יהודיים בעולם, ולעזור להם להגיע לחיים מאושרים עם עצמם ועם הילדים שלהם.
                    </Box>
                    <Box className='About'>
                        מאושרים החל כקבוצת הורים קטנה, אך הדרישה מהשטח גרמה לצמיחה ושגשוג מהירה. כיום מאושרים מפעיל את האתר היחודי הזה בו ניתן לקבל עצה טובה ומענה חינוכי לכל שאלה, וכן לשלוח שאלות נוספות ולהצטרף לקהילת מאושרים. 
                    </Box>
                    <Box className='About'>
                    בנוסף אנו מפעילים קבוצות ווצאפ עם טיפ חינוך יומי, הרצאות, מסלול הדרכה אישי, מרכז ייעוץ וטיפול, מחלקת הוצאה לאור.  
                    </Box>
                    <Box className="About">
                        והכל כמובן להגיע לעיקר כל העיקרים ולהגשים את היעד הנכסף: גאולה אמיתית ושלימה מיד ממש. אמן!
                    </Box>
                    </div>
                    </Box>
                </Typography>
        </CacheProvider>
        
  )
}

export default About