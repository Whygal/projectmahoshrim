import React, {useState, useEffect} from 'react'
import Question from '../Question/Question'
import MangerToolKit from '../mangerToolKit/MangerToolKit'
import axios from 'axios'


const UserManager = () => {

  const [questions, setQuestions] = useState([])
  // const [tips, setTips] = useState([])
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')
  const [delQu, setDelQu] = useState("")
  const [editQu, setEditQu] = useState(questionAsked)
  const [ans, setAns] = useState([])
  const [users, setUsers] = useState([])
  //Users

  // const getAllUsers = async () => {
  //   const response = await fetch(`http://localhost:8000/api/getAllUsers`)
  //   const answer = await response.json()
  //   setUsers(answer)
  // }

  // const blockedUser = async () => {

  // }
  
  //Q

  const getQ = async () => {
    const response = await fetch(`http://localhost:8000/api/getAllQ`)
    const answer = await response.json()
    setQuestions(answer)
  }

  const q_idToDel = (childData) => {
    const q = ans.filter((a)=> a.q_id._id === childData)
    const qCheck = q.map((a)=> a._id)
    if(qCheck !== []){
      const endpoints = [`http://localhost:8000/api/delete/deleteOneQ/${childData}`, 
    `http://localhost:8000/api/delete/DeleteOneA/${qCheck}`]
      
    axios.all(endpoints.map((endpoints)=> axios.delete(endpoints))).then((res)=> {
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log(res.data)
      }
    })
    }else{
      axios.delete(`http://localhost:8000/api/delete/DeleteOneA/${childData}`).then((res)=> {
        if(res.data.message){
          console.log(res.data.message)
        }else{
          console.log(res.data)
        }
      })
    }
  }

  const editQ = async (newQId, newQ) => {
   axios.put(`http://localhost:8000/api/Q/updateQ/${newQId}`, {q: newQ}).then((res)=> {
    if(res.data.message){
      console.log(res.data.message)
    }else{
      console.log(res.data)
    }
   })
  }

  //A

  // const postA = async () => {
  //   Axios.post(`http://localhost:8000/api/addOneA`, 
  //     {a:ans, q_id:q_id})
  //     .then((response)=>{
  //       if(response.data.message){
  //         setQStatus(response.data.message)
  //       }else{
  //         console.log(response.data)
  //         setQStatus(response.data.username) 
  //       }
  //     })
  // }

  const getAllA = async() => {
    const response = await fetch("http://localhost:8000/api/getAllA")
    const answer = await response.json()
    setAns(answer)
  }
  
  const a_idToDel = (childData) =>{
    axios.delete
    (`http://localhost:8000/api/delete/DeleteOneA/${childData}`)
    .then((res)=> {
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log(res.data)
      }
    })
  }

  //tips
//  const getTips = async() => {
//     const response = await fetch("http://localhost:8000/api/getTips")
//     const answer = await response.json()
//     setTips(answer)
//   }

  //Q useEffect
  useEffect(()=>{getQ()}, [questions])

  //a useEffect
  useEffect(()=>{getAllA()})

  //tips useEffect
  // useEffect(()=>{getTips()})

  

  

  return (
    <div>
      <div>שאלות</div>
    <div className='manger'>
      <div className='qZone'>
              {questions.map((q)=> 
              <div key={q._id}>
              <Question
              q={q.q}
              > 
              </Question>
              <div>
              <MangerToolKit
              q_id={q._id}
              q_Text={q.q}
              q_idToDel={q_idToDel}
              editQ={editQ}
              >                
              </MangerToolKit>
              </div>
      </div>
      )}
      </div>

      <div>שאלות עם  תשובה</div>

      <div>{ans.map((a)=>
      <div key={a._id}>
      <Question
      q={a.q_id.q}
      a={a.a}
      q_id={a.q_id.q_id}
      />
      <MangerToolKit
      a_id={a._id}
      a_idToDel={a_idToDel}
      >
      </MangerToolKit>
      </div>
      )}
      </div>

      {/* <div>{users}</div> */}
      {/* <div>{tips.map((t)=>t.tips)}</div> */}
    </div>
    </div>
  )
}

export default UserManager