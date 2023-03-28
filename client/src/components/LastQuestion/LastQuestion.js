
import React from 'react'
import Question from '../Question/Question'

const LastQuestion = ({input, data}) => {
import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar'

const LastQuestion = ({input}) => {

    const qsData = async ()=> {
        const response = await fetch('http://localhost:8000/api/getAllQ')
        const answer = await response.json()
        setData(answer)
    }

    const dataSort = ()=> {
      data.forEach(item=> item.date.sort((a,b)=>{return a-b}))
    }
console.log(dataSort());

    useEffect(()=>{
        qsData();
        }, [])

        const lastQuestions = data.map(prop=> <div key={prop.id}>{prop.q}</div>).sort((a,b)=> {return a-b})
  return (
    <div>
        {data.map((q)=> 
        <Question
        key={q._id}
        q={q.q_id.q}
        a={q.a}
        />
        ).sort((a,b)=> {return a-b})
        }
    </div>
  )
}

export default LastQuestion