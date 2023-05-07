import React, { useEffect, useState } from 'react'

const LastQuestion = ({data}) => {

  const [allQ, setAllQ] = useState([])
  const [num, setNum] = useState(-5)

  const getAllQ = async ()=> {
    const response = await fetch("http://localhost:8000/api/getAllQ")
    const answer = await response.json()
    setAllQ(answer)
  }

  // const newArr = allQ.slice(-5).reverse()
  // setCutNumber(newArr)
  // console.log(newArr);

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