import React, { useEffect, useState } from 'react'
import "./style.css"
import Question from '../Question/Question'
import SearchBar from '../SearchBar/SearchBar'
import LastQuestion from '../LastQuestion/LastQuestion'

const Main = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])
  const [input, setInput] = useState('')

  return (
    <div>
      <SearchBar input={input} setInput={setInput} />
    </div>
  )
}

export default Main