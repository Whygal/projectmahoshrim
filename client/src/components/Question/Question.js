import React, {useState} from 'react'
import "./style.css"

const Question = ({q,a}) => {
    const [ans, setAns] = useState([])
    
  return (
    <div>
       <div className='Q' onClick={() => ans !== [] ? setAns(a) : setAns([])}>{q}</div>
        {ans.length ? <div>{ans}</div> : <div></div>}
    </div>
  )
}

export default Question