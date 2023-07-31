import React, { useState } from 'react'


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
        />
        )}
        <button onClick={moreFive}>הצג עוד שאלות</button>
    </div>
  )
      }

export default LastQuestion