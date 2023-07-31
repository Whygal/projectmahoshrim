import React, { useState, useEffect } from 'react'
import "./style.css"
import SearchBar from '../SearchBar/SearchBar'


const Main = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])

    const qsData = async ()=> {
        const response = await fetch('http://localhost:8000/api/getAllA')
        const answer = await response.json()
        setData(answer)
    }
    

    useEffect(()=>{qsData()})
  return (
    <div className='main'>
      <SearchBar input={input} setInput={setInput} data={data}/>
    </div>
  )
}

export default Main