import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LastQuestion from '../LastQuestion/LastQuestion'
import Question from '../Question/Question'
import { Button, Input } from '@mui/material'
import "./SearchBar.css"
const SearchBar = ({input, setInput, data}) => {

    const [qSearch, setQSearch] = useState([])

    const getQSearch = async ()=> {
      const response = await fetch(`http://localhost:8000/api/getQAndABySearch/${input}`)
      const answer = await response.json()
      // console.log(answer);
      setQSearch(answer)
  }

   const handleSubmit = (e)=> e.preventDefault()
   
  
        const questions = qSearch.map((prop)=> <Question key={prop._id} q={prop.q_id.q} a={prop.a} user={prop.q_id.user}/>)
        const content = qSearch.length && input !== "" ? questions : <div className='controlLQ'><LastQuestion data={data}/><Link to={'/AskQuestion'}>לשליחת שאלה הקש כאן</Link></div>
        
        return (
    <div className='search' onSubmit={handleSubmit}>
      <div className='bar'>
        <Input sx={{marginLeft: "3px"}} type='text' className='search-input' placeholder='חפש שאלה' onChange={(e)=> setInput(e.target.value)}/>
        <Button sx={{marginRight:"3px"}} size='small' color="secondary" variant='contained' onClick={getQSearch}>חפש</Button>
        </div>
        <br></br>
        <div className='q'>{content}</div>
    </div>
  )
}

export default SearchBar