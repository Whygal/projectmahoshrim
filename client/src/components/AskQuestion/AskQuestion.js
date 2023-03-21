import { FormControlLabel, Checkbox, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Axios from "axios"
import { BASE_URL } from '../../Constants/Const'

const AskQuestion = () => {
  const [agreeToPublish, setAgreeToPublish] = useState(false)
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')
<<<<<<< HEAD
  

  const askQ = async () => {
    Axios.post(`http://localhost:8000/api/addOneQ`, 
      {q:questionAsked , AgreeToPublish:agreeToPublish})
=======

  const askQ = () => {
    Axios.post(`${BASE_URL}/api/addOneQ`, 
      {q:questionAsked , agreeToPublish:agreeToPublish})
>>>>>>> origin
      .then((response)=>{
        if(response.data.message){
          setQStatus(response.data.message)
        }else{
          console.log(response.data)
          setQStatus(response.data.username) 
        }
      })
<<<<<<< HEAD
=======
      console.log(agreeToPublish);
>>>>>>> origin
  }

  useEffect(()=>{askQ()})

  return (
    <div>
     <label>מה השאלה?</label>
<<<<<<< HEAD
     <input type="text" name='name' value={setQuestionAsked}/>
     <FormControlLabel value={agreeToPublish} control={<Checkbox />} label="האם אתה מסכים לפרסם את השאלה?" 
     onClick={()=> agreeToPublish === false ? setAgreeToPublish(true) : setAgreeToPublish(false) }/>
=======
     <input type="text" name='name' onChange={(e)=>{setQuestionAsked(e.target.value)}}/>
     <FormControlLabel control={<Checkbox onClick={(e)=> {e.target.Checked ? setAgreeToPublish(true) : setAgreeToPublish(false)}}/>} label="האם אתה מסכים לפרסם את השאלה?" ></FormControlLabel>
>>>>>>> origin
     <Button onClick={askQ}>שלח שאלה</Button>
     <p>{qStatus}</p>
    </div>
  )
}

export default AskQuestion