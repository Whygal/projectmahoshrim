import React, {useState} from 'react'
import data from './data'
import { Link } from 'react-router-dom'

const SearchBar = () => {

    const [results, setResults] = useState(data)

   const handleSumbit = (e)=> e.preventDefault()

    const handleSearchChange = (e)=> {
        if(!e.target.value) return setResults(data) 
        const resultsArr = data.filter
        (que=> que.title.includes(e.target.value) || que.body.includes(e.target.value))
        setResults(resultsArr)
    }

        

        const questions = results.map(prop=> <div key={prop.id}><p>{prop.body}</p></div>)
        const content = results.length ? questions : <div><h4>לא נמצאו נתונים</h4><Link to={'/AskQuestion'}>לשליחת שאלה הקש כאן</Link></div>
  return (
    <div className='search' onSubmit={handleSumbit}>
        <input type='text' className='search-input' placeholder='..חפש שאלה' onChange={handleSearchChange}></input>
        <div>{content}</div>
    </div>
  )
}

export default SearchBar