import { FormControlLabel, Checkbox, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Axios from "axios"


const AskQuestion = () => {
  const [agreeToPublish, setAgreeToPublish] = useState(false)
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')
  

  const askQ = async () => {
    Axios.post(`http://localhost:8000/api/addOneQ`, 
      {q:questionAsked , agreeToPublish:agreeToPublish})
      .then((response)=>{
        if(response.data.message){
          setQStatus(response.data.message)
        }else{
          console.log(response.data)
          setQStatus(response.data.username) 
        }
      })
      console.log(agreeToPublish);
  }

  useEffect(()=>{askQ()})

  const agree = () => {
    setAgreeToPublish(!agreeToPublish)
  }

  return (
    <div>
     <label>מה השאלה?</label>
     <input type="text" name='name' onChange={(e)=>{setQuestionAsked(e.target.value)}}/>
     <FormControlLabel control={<Checkbox onClick={()=>agree()}/>} label="האם אתה מסכים לפרסם את השאלה?" ></FormControlLabel>
     <Button onClick={askQ}>שלח שאלה</Button>
     <p>{qStatus}</p>
    </div>
  )
}

export default AskQuestion