import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LastQuestion from '../LastQuestion/LastQuestion'
const SearchBar = ({input, setInput}) => {

    const [data, setData] = useState([])
    const [results, setResults] = useState(data)
    const [qSearch, setQSearch] = useState([])


    const getQSearch = async ()=> {
      const response = await fetch(`http://localhost:8000/api/getQBySearch/${input}`)
      const answer = await response.json()
      setQSearch(answer)
  }

   const handleSumbit = (e)=> e.preventDefault()


    // const handleSearchChange = (e)=> {
    //     // if(!e.target.value) return setResults() 
    //     const resultsArr = data.filter
    //     (que=> que.q.includes(e.target.value))
    //     setResults(resultsArr)
    // }

        const questions = qSearch.map(prop=> <div key={prop.id}><p>{prop.q}</p></div>)
        const content = qSearch.length ? questions : <div><LastQuestion/><Link to={'/AskQuestion'}>לשליחת שאלה הקש כאן</Link></div>
  return (
    <div className='search' onSubmit={handleSumbit}>
        <input type='text' className='search-input' placeholder='..חפש שאלה' onChange={(e)=> setInput(e.target.value)}></input>
        <button onClick={getQSearch}><h6>חפש</h6></button>
        <div>{content}</div>
    </div>
  )
}

export default SearchBar