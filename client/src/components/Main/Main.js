import React, { useEffect, useState } from 'react'
// import {func} from './axios.js'
const Main = () => {
  
  const [questions, setQuestions] = useState([])

  const getQ = async () => {
    const response = await fetch(`https://data.mongodb-api.com/app/data-nfwbt/endpoint/data/v1/action/findOne/Q&A/qs`)
    const answer = await response.json()
    setQuestions(answer)
  }

  useEffect(()=>{getQ()},[])
  console.log(questions)
  return (
    <div>{""}</div>
  )
}

export default Main