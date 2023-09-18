import React, { useState } from 'react'
import Question from '../Question/Question'
import { Button } from '@mui/material'
import "./style.css"
const LastQuestion = ({data}) => {
  
  const [num, setNum] = useState(-5)

  const moreFive = ()=> {
   setNum(num -5)
  }


  return (
    <div className='LastQuestion'>
        {data.slice(num).reverse().map((q)=> 
        <Question
        key={q._id}
        q={q.q_id.q}
        a={q.a}
        q_id={q._id}
        user={q.q_id.user}
        />
        )}
        <Button onClick={moreFive}>הצג עוד שאלות</Button>
    </div>
  )
      }

export default LastQuestion