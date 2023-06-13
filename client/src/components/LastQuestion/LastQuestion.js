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

const LastQuestion = ({data}) => {

  return (
    <div>
        {data.map((q)=> 
        <Question
        key={q._id}
        q={q.q_id.q}
        a={q.a}
        />
        ).sort((a,b)=> {return a-b})
        }
    </div>
  )
      }

export default LastQuestion