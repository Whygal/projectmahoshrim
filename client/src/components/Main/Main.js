import React, { useEffect, useState } from 'react'
import "./style.css"
// import SearchBar from "../SearchBar/SearchBar"
import Question from '../Question/Question'

const Main = () => {
  const [questions, setQuestions] = useState([])

  const getQ = async () => {
    const response = await fetch(`http://localhost:8000/api/getAllQ`)
    const answer = await response.json()
    setQuestions(answer)
  }

  useEffect(()=>{getQ()})

  return (
    <div>
    <div className='qDiv'>
      {/* <SearchBar /> */}
    {questions.map((q)=>
    <Question
    key={q._id}
    q={q.q}
    />)}
    </div>
    </div>
  )
}

export default Main