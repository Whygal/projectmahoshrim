import React, { useEffect, useState } from 'react'
import "./style.css"
import Question from '../Question/Question'
import SearchBar from '../SearchBar/SearchBar'
import LastQuestion from '../LastQuestion/LastQuestion'

const Main = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])
  const [input, setInput] = useState('')

  const getQ = async () => {
    const response = await fetch(`http://localhost:8000/api/getAllQ`)
    const answer = await response.json()
    setQuestionsAndAnswers(answer)
  }

  useEffect(()=>{getQ()})

  return (
    <div>
      <SearchBar input={input} setInput={setInput} />
      <LastQuestion input={input} />
    </div>
  )
}

export default Main