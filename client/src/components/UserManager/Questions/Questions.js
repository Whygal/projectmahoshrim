import React, {useEffect} from 'react'
import Question from '../../Question/Question'
import MangerToolKit from '../../mangerToolKit/MangerToolKit'
import axios from 'axios'
import EditBox from "../../EditBox/EditBox"
import AnsBox from '../../AnsBox/AnsBox'

import "./style.css"
const Questions = ({questions, setQuestions, ans, setQ_idToEdText, editedQ, 
    post_a_box, editBoxOpen, toAns, editFunc,  q_idToEdText, toAnsQ, toEd,  setEditedQ, ansBoxOpen , setToAns}) => {

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

      //
      useEffect(()=>{getQ()})
      
  return (
    <div><p>שאלות</p>
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
  )
}

export default Questions