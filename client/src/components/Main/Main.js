import React, { useEffect, useState } from 'react'
import "./style.css"
import Question from '../Question/Question'
import SearchBar from '../SearchBar/SearchBar'

const Main = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])

  const getQ = async () => {
    const response = await fetch(`http://localhost:8000/api/getAllQ`)
    const answer = await response.json()
    setQuestionsAndAnswers(answer)
  }

  useEffect(()=>{getQ()})

  return (
    <div>
    <div className='qDiv'>
      <SearchBar />
    {questionsAndAnswers.map((q)=>
    <Question
    key={q._id}
    q={q.q_id.q}
    a={q.a}
    />)}
    </div>
    </div>
  )
}

export default Main