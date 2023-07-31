import React from 'react'
import Question from '../Question/Question'
import "./style.css"
const LastQuestion = ({data}) => {
  return (
    <div className='lineQ'>
        {data.map((q)=> 
        <Question
        key={q._id}
        q={q.q_id.q}
        a={q.a}
        q_id={q._id}
        user={q.q_id.user}
        />
        )
        }
        {/* <button onClick={console.log(data)}>lo</button> */}
    </div>
    
  )
}

export default LastQuestion