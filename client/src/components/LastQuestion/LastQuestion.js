import React, {useState, useEffect} from 'react'
import Question from '../Question/Question'

const LastQuestion = ({input}) => {
const [data, setData] = useState([])

    const qsData = async ()=> {
        const response = await fetch('http://localhost:8000/api/getAllA')
        const answer = await response.json()
        setData(answer)
    }

    useEffect(()=>{qsData()},[data])

    const dinamicQuestion = ()=> {
        data.date.sort((a,b)=> {
            return a-b  
        } )
    }

  return (
    <div>
        {data.map((q)=> 
        <Question
        key={q._id}
        q={q.q_id.q}
        a={q.a}
        />
        )
        }
        {/* {input.length ? <div></div> : <div><h4>:שאלות אחרונות</h4><div>{dinamicQuestion}</div></div>} */}
    </div>
  )
}

export default LastQuestion