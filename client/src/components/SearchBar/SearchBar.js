import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LastQuestion from '../LastQuestion/LastQuestion'
import Question from '../Question/Question'

const SearchBar = ({input, setInput, data}) => {

    const [qSearch, setQSearch] = useState([])

    const getQSearch = async ()=> {
      const response = await fetch(`http://localhost:8000/api/getQBySearch/${input}`)
      const answer = await response.json()
      setQSearch(answer)
  }

   const handleSubmit = (e)=> e.preventDefault()
  
        const questions = qSearch.map((prop)=> <Question key={prop._id} q={prop.q} a={prop}></Question>)
        const content = qSearch.length ? questions : <div><LastQuestion data={data}/><Link to={'/AskQuestion'}>לשליחת שאלה הקש כאן</Link></div>
        
        return (
    <div className='search' onSubmit={handleSubmit}>
        <input type='text' className='search-input' placeholder='..חפש שאלה' onChange={(e)=> setInput(e.target.value)}></input>
        <button onClick={getQSearch}><h6>חפש</h6></button>
        <div>{content}</div>
    </div>
  )
}

export default SearchBar