import React, {useState, useEffect} from 'react'
import Question from '../Question/Question'
import MangerToolKit from '../mangerToolKit/MangerToolKit'
import axios from 'axios'
<<<<<<< HEAD
<<<<<<< HEAD
import SearchBar from '../SearchBar/SearchBar'

=======
=======
>>>>>>> 40e986f8881a6fe94e2ad292e4f0c0e879e14baa
import EditBox from "../EditBox/EditBox"
import AnsBox from '../../AnsBox/AnsBox'
import { Button, FormControl, Input, TextField } from '@mui/material'
import "./style.css"
import Users from '../../Users/Users'
<<<<<<< HEAD
>>>>>>> 9075408def226b4e42e04122ffc6ad7515d45934
=======

>>>>>>> 40e986f8881a6fe94e2ad292e4f0c0e879e14baa
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

  const editQ = async () => {
   axios.put(`http://localhost:8000/api/Q/updateQ/${q_idToEdText}`, {q: editedQ}).then((res)=> {
    if(res.data.message){
      console.log(res.data.message)
      setQ_idToEdText("")
    }else{
      console.log(res.data)
    }
   })
  }

  const postAns = async () => {
    const q_id = post_a_box
    axios.post("http://localhost:8000/api/addOneA", {q_id: q_id, a: toAns}).then((res)=> 
    console.log(res)
    )
  }
  
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

  //Q useEffect
  useEffect(()=>{getQ()}, [questions])

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
    <div>         
     <div className='manger'>
            <div className='general'>
              <p>שאלות</p>
                   <div className='qZone'>
                              {questions.map((q)=> 
                              <div key={q._id}>
                              <Question
                              q={q.q}
                              user={q.user}
                              > 
                              </Question>
                              <div>
                                      <div>
                                      <MangerToolKit
                                      q_id={q._id}
                                      q_Text={q.q}
                                      q_idToDel={q_idToDel}
                                      editFunc={editFunc}
                                      toAnsQ={toAnsQ}
                                      >                
                                      </MangerToolKit>
                                      </div>
                                          {editBoxOpen && q_idToEdText === q._id ? 
                                          <div>
                                          <EditBox 
                                          key={q.id}
                                          q_Text={toEd}
                                          setEditedQ={setEditedQ}
                                          editQ={editQ}
                                          />
                                          </div>: <div></div>}
                                          {ansBoxOpen && post_a_box === q._id ?
                                          <div>
                                            <AnsBox
                                            setToAns={setToAns}
                                            toAns={toAns}
                                            postAns={postAns}
                                            />
                                          </div> :
                                          <div></div>
                                          }
                              </div>
                      </div>
                      )}
            </div>
      </div>

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