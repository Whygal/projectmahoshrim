import React, {useState, useEffect} from 'react'
import MangerToolKit from '../mangerToolKit/MangerToolKit'
import axios from 'axios'
import EditBox from "../EditBox/EditBox"
import AnsBox from '../AnsBox/AnsBox'
import Questions from './Questions/Questions'
import { Button, FormControl, Input, TextField } from '@mui/material'
import "./style.css"
import Users from '../../Users/Users'
import Question from '../Question/Question'
const UserManager = () => {
  // Q get state
  const [questions, setQuestions] = useState([])

  // get A
  const [ans, setAns] = useState([])

  // get Tips
  const  [tips, setTips] = useState([])

  // Edit box
  const [editBoxOpen , setEditBoxOpen] = useState(false)
  const [ansBoxOpen , setAnsBoxOpen] = useState(false)

  // Edit Q 
  const [toEd, setToEd] = useState("")
  const [editedQ, setEditedQ] = useState("")
  const [q_idToEdText, setQ_idToEdText] = useState("")

  // post A
  const [toAns, setToAns] = useState("")
  const [post_a_box, setPost_a_box] = useState("")

  // Edit A
  const [toEdA, setToEda] = useState("")
  const [editedA, setEditedA] = useState("")
  const [a_idToEdText, setA_idToEdText] = useState("")
  const [tipBoxOpen, setTipBoxOpen] = useState(false)
  
  //users
  const [users, setUsers] = useState([])

  // tips
  const [toEdTip, setToEdTip] = useState("")
  const [editedTip, setEditedTip] = useState("")
  const [tip_idToEdText, setTip_idToEdText] = useState("")
  
  //Block Users
  const [blockUsers, setBlockUsers] = useState([])
  
  // async func
  
  //A
 
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

  const editA = async () => {
    axios.put
    (`http://localhost:8000/api/A/updateA/${a_idToEdText}`, {a: editedA}).then((res)=>{
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log(res.data)
      }
    } )
  }

  // tips

 const getTips = async() => {
    const response = await fetch("http://localhost:8000/api/getTips")
    const answer = await response.json()
    setTips(answer)
  }

  const deleteTip = async (childData) => {
    axios.delete
    (`http://localhost:8000/api/delete/DeleteOneTip/${childData}`)
    .then((res)=> {
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log(res.data)
      }
    })
  } 

  const postTip = async () => {
    axios.post(`http://localhost:8000/api/postTip`, {tip: editedTip}).then((res)=> {
      if(res.data.message){
        console.log(res.data.message)
        setEditedTip("")
      }else{
        console.log(res.data)
      }
    })
  }

  const editTipToSend = async () => {
    axios.put
    (`http://localhost:8000/api/Tips/updateTips/${tip_idToEdText}`, {tip: editedTip}).then((res)=>{
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log(res.data)
      }
    })
  }

  //users

  const getAllUsers = async() => {
    const response = await fetch("http://localhost:8000/api/getAllUsers")
    const answer = await response.json()
    setUsers(answer)
  }
  
  //Block Users
  
  const getAllBlockUsers = async() => {
    const response = await fetch("http://localhost:8000/api/getBlockedUsers")
    const answer = await response.json()
    setBlockUsers(answer)
  }

  const delBlock = async (childData) => {
    axios.delete
    (`http://localhost:8000/api/removeBlock/${childData}`)
    .then((res)=> {
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log(res.data)
      }
    })
  } 

  const becomeManager = async(id) =>{
       axios.put(`http://localhost:8000/api/isManager/${id}`, {isManager: "true"})
    .then((res)=> {
      if(res.data.message){
        console.log(res.data.message)
      }else{
        console.log(res.data)
      }
    }
    ).catch((e)=>console.log(e))
  }

  const removeManager = async(id) =>{
    axios.put(`http://localhost:8000/api/isManager/${id}`, {isManager: "false"})
 .then((res)=> {
   if(res.data.message){
     console.log(res.data.message)
   }else{
     console.log(res.data)
   }
 }
 ).catch((e)=>console.log(e))
}

  //a useEffect
  useEffect(()=>{getAllA()}, [ans])

  //tips useEffect
  useEffect(()=>{getTips()}, [tips])

  // Users
  useEffect(()=>{getAllUsers()}, [users])
  
  //Block users 
  useEffect(()=>{getAllBlockUsers()}, [blockUsers, users])


  //edit boxes func

  const editFunc = (q_Text, q_id) => {
    setEditBoxOpen(!editBoxOpen)
    setToEd(q_Text)
    setQ_idToEdText(q_id) 
  }

  // post ans box
  const toAnsQ = (q_id) => {
    setAnsBoxOpen(!ansBoxOpen)
    setPost_a_box(q_id)
  }

  // edit ans Func 
  const editAnsFunc = (a_Text, a_id) => {
    setEditBoxOpen(!editBoxOpen)
    setToEda(a_Text)
    setA_idToEdText(a_id)
  }
 
  const editTip = (tipId, tip) => {
    setTipBoxOpen(!tipBoxOpen)
    setToEdTip(tip)
    setTip_idToEdText(tipId)
  }

  return (
           
     <div className='manger'>
            <div className='general'>
              <Questions
              questions={questions} setQuestions={setQuestions} ans={ans} setQ_idToEdText={setQ_idToEdText} editedQ={editedQ} 
              post_a_box={post_a_box} editBoxOpen={editBoxOpen} toAns={toAns} editFunc={editFunc}  q_idToEdText={q_idToEdText}
               toAnsQ={toAnsQ} toEd={toEd}  setEditedQ={setEditedQ} ansBoxOpen={ansBoxOpen} setToAns={setToAns}/>
      <div className='general'>
      <div>שאלות עם  תשובה</div>
        {ans.map((a)=> a.q_id !== undefined) ? ans.map((a)=>
      <div key={a._id}>
      <div>  
      <Question
      q={a.q_id.q}
      a={a.a}
      q_id={a.q_id._id}
      user={a.q_id.user}
      />
      </div>
      <div>
      <MangerToolKit
      a_id={a._id}
      a_idToDel={a_idToDel}
      a_Text={a.a}
      editAnsFunc={editAnsFunc}
      >
      </MangerToolKit>
      </div>
        { editBoxOpen && a_idToEdText === a._id ?
        <div className='q'>
        <EditBox 
        key={a.id}
        a_text={toEdA}
        setEditedA={setEditedA}
        editA={editA}
        />
        </div>: <div></div>
        }
      </div>
      ) : <div></div>}
      </div>
        <div className='general'>
      <p>טיפים</p>
      <Button variant='contained' onClick={()=> setAnsBoxOpen(!ansBoxOpen)}>פרסם טיפ</Button>
      { ansBoxOpen ?
      <FormControl>
      <Input
      onChange={(e)=> setEditedTip(e.target.value)}
      multiline
      >
      </Input>
      <Button onClick={()=> postTip()}>פרסם</Button>
      </FormControl>
       : <div></div> }
      <div>
        {tips.map(
          (t)=>
          <div key={t._id} >
            <TextField 
            value={t.tip} 
            InputProps={{
              readOnly: true,
            }}
            >
            </TextField>
            <div>
              <MangerToolKit
              tipId={t._id}
              tip={t.tip}
              deleteTip={deleteTip}
              editTip={editTip}
              ></MangerToolKit>
            </div>
            { tipBoxOpen && tip_idToEdText === t._id ?
        <div className='q'>
        <EditBox 
        key={t._id}
        tip_text={t.tip}
        toEdTip={toEdTip}
        setEditedTip={setEditedTip}
        editTipToSend={editTipToSend}
        />
        </div>: <div></div>
        }
          </div>
      )}
      </div>
      </div>
      <br></br>
      <div className='general'>
        <div>משתמשים:</div>
        <br></br>
      <div>
        {users.map((u)=> 
        <div key={u._id}>{
        <Users
        username={u.username}
        userId={u._id}
        email={u.email}
        />}
        <div>
        <Button onClick={()=> becomeManager(u._id)}>הפוך למנהל</Button>
        </div>
        <div>
        <Button onClick={()=> removeManager(u._id)}>הורד מניהול</Button>
        </div>
        </div>
        )}
      </div>
      </div>
      <br></br>
        <div className='general'>
        <div>משתמשים חסומים:</div>
        <br></br>
      <div>
        {blockUsers.map((u)=> 
         <div key={u._id}>
          <div>{u.username}</div>
          <div>{u.email}</div>
                 <div> {
                          <MangerToolKit
                          userIdRemoveBlock={u._id}
                          delBlock={delBlock}
                          />
                  }</div>
        </div>
        )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserManager