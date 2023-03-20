import { FormControlLabel, Checkbox, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Axios from "axios"
import { BASE_URL } from '../../Constants/Const'

const AskQuestion = () => {
  const [agreeToPublish, setAgreeToPublish] = useState(false)
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')

  const askQ = () => {
    Axios.post(`${BASE_URL}/api/addOneQ`, 
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

  // useEffect(()=>{askQ()})

  return (
    <div>
     <label>מה השאלה?</label>
     <input type="text" name='name' onChange={(e)=>{setQuestionAsked(e.target.value)}}/>
     <FormControlLabel control={<Checkbox onClick={(e)=> {e.target.Checked ? setAgreeToPublish(true) : setAgreeToPublish(false)}}/>} label="האם אתה מסכים לפרסם את השאלה?" ></FormControlLabel>
     <Button onClick={askQ}>שלח שאלה</Button>
     <p>{qStatus}</p>
    </div>
  )
}

export default AskQuestion