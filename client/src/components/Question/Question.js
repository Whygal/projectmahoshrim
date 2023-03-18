import React,{useState, useEffect} from 'react'
import "./style.css"

const Question = ({q}) => {
//   const [answer, setAnswer] = useState("")

//     const getA = async () => {
//     const response = await fetch(`http://localhost:8000/api/getOneAByQ/${q.q_id}`)
//     const ansServer = await response.json()
//     setAnswer(ansServer)
//   }

//   useEffect(()=>{getA()})

  return (
    <div  >
       <div className='Q' >{q}</div>
       {/* <div className='A'>{answer.a}</div> */}
    </div>
  )
}

export default Question