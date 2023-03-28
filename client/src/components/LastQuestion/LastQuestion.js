import React from 'react'
import Question from '../Question/Question'

const LastQuestion = ({data}) => {

        
  return (
    <div>
      {data.map((q)=> 
        <Question
        key={q._id}
        q={q.q_id.q}
        a={q.a}
        />
        ).sort((a,b)=> {return a-b})}
        {/* {input.length ? <div></div> : <div><h4>:שאלות אחרונות</h4><div>{dinamicQuestion}</div></div>} */}
    </div>
  )
}

export default LastQuestion