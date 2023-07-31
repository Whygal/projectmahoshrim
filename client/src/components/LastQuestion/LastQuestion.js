
import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../Context'

const LastQuestion = () => {


  const [num, setNum] = useState(-5)

  const moreFive = ()=> {
   setNum(num -5)
  }

  useEffect(()=>{getAllQ()}, [])

  return (

    <div className='LastQuestion'>
        {allQ.slice(num).reverse().map((item)=> 
        <div>{item.q}</div>
        )}
        <button onClick={moreFive}>הצג עוד שאלות</button>
    </div>
  )
      }

export default LastQuestion