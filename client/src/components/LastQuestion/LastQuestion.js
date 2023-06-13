
import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../Context'

const LastQuestion = () => {


  const [allQ, setAllQ] = useState([])
  const [num, setNum] = useState(-5)

  

  const getAllQ = async ()=> {
    const response = await fetch("http://localhost:8000/api/getAllQ")
    const answer = await response.json()
    setAllQ(answer)
  }


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