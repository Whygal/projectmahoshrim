import React, {useState} from 'react'
import "./style.css"

const Question = ({q,a}) => {
    const [ans, setAns] = useState([])
    
  return (
    <div>
       <div className='Q' onClick={() => setAns(a)}>{q}</div>
        <div>{ans}</div>
    </div>
  )
}

export default Question