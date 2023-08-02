import { FormControlLabel, Checkbox, Button } from '@mui/material'
import React, {useState, useContext} from 'react'
import MyContext from '../../Context'
import Axios from "axios"
import "./style.css"
import { TextField } from '@mui/material'
import { BASE_URL } from '../../Constants/Const'

const AskQuestion = () => {
  const dataFromContext = useContext(MyContext)
  const [agreeToPublish, setAgreeToPublish] = useState(false)
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')
  const [error, setError] = useState("")

  const askQ = async () => {
    Axios.post(`${BASE_URL}/api/addOneQ`, 
      {q:questionAsked , agreeToPublish:agreeToPublish, username:dataFromContext.username})
      .then((response)=>{
        if(response.data.message){
          setQStatus(response.data.message)
        }
        else{
          console.log(response.data)
        }
      })
  }

  const agree = ()=> {
    setAgreeToPublish(!agreeToPublish)
  }

  const noQ = () => {
    setError("אתה חייב להתחבר בשביל לשאול שאלה")
  }
  
  return (
    <div className='ask'>
     <h5>מה השאלה?</h5>
     <TextField 
     type="text" 
     name='name' 
     placeholder='הכנס שאלה'
     onChange={(e)=>{setQuestionAsked(e.target.value) }}
     multiline
     />
     <FormControlLabel sx={{mx:"auto"}} control={<Checkbox onClick={()=>agree()}/>} label="האם אתה מסכים לפרסם את השאלה?" ></FormControlLabel>
     <Button onClick={() => dataFromContext.userId !== "" ? askQ() : noQ()}>שלח שאלה</Button>
     <p>{qStatus}</p>
     <div>{error}</div>
    </div>
  )
  }

export default AskQuestion