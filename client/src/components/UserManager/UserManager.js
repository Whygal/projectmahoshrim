import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const UserManager = () => {

  const [questions, setQuestions] = useState([])
  const [tips, setTips] = useState([])
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')
  const [delQu, setDelQu] = useState("")
  const [editQu, setEditQu] = useState(questionAsked)
  const [q_id, setQ_id] = useState("")
  const [ans, setAns] = useState([])
  const [users, setUsers] = useState([])
  //Users

  const getAllUsers = async () => {
    const response = await fetch(`http://localhost:8000/api/getAllUsers`)
    const answer = await response.json()
    setUsers(answer)
  }

  // const blockedUser = async () => {

  // }
  
  //Q

  const askQ = async () => {
    Axios.post(`http://localhost:8000/api/addOneQ`, 
      {q:questionAsked})
      .then((response)=>{
        if(response.data.message){
          setQStatus(response.data.message)
        }else{
          console.log(response.data)
          setQStatus(response.data.username) 
        }
      })
  }

  const getQ = async () => {
    const response = await fetch(`http://localhost:8000/api/getAllQ`)
    const answer = await response.json()
    setQuestions(answer)
  }

  const deleteQ = async () => {
    const response = await fetch(`http://localhost:8000/api/delete/deleteOneQ/${q_id}`)
    const answer = await response.json()
    setQuestions(answer)
  }

  const editQ = async () => {
    const response = await fetch(`http://localhost:8000/api/Q/updateQ/${q_id}`)
    const answer = await response.json()
    setQuestions(answer)
  }

  //A

  const postA = async () => {
    Axios.post(`http://localhost:8000/api/addOneA`, 
      {a:ans, q_id:q_id})
      .then((response)=>{
        if(response.data.message){
          setQStatus(response.data.message)
        }else{
          console.log(response.data)
          setQStatus(response.data.username) 
        }
      })
  }

  const getAllA = async() => {
    const response = await fetch("http://localhost:8000/api/getAllA")
    const answer = await response.json()
    setAns(answer)
  }

  //tips
 const getTips = async() => {
    const response = await fetch("http://localhost:8000/api/getTips")
    const answer = await response.json()
    setTips(answer)
  }

  //Q useEffect
  useEffect(()=>{getQ()})
  useEffect(()=>{deleteQ()})
  useEffect(()=>{editQ()})
  useEffect(()=>{askQ()})

  //a useEffect
  useState(()=>{postA()})
  useState(()=>{getAllA()})

  //tips useEffect
  useEffect(()=>{getTips()})

  return (
    <div>
      <div>{questions}</div>
      <div>{users}</div>
      <div>{tips}</div>
    </div>
  )
}

export default UserManager