
import React from 'react'
import Question from '../Question/Question'

const LastQuestion = ({data}) => {
<<<<<<< HEAD

=======
>>>>>>> 956135cf55c4b1253de264704abef6bb33a8838d
  return (
    <div>
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
    </div>
    
  )
}

export default LastQuestion