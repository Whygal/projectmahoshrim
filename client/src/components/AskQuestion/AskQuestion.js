import { FormControlLabel, Checkbox, Button } from '@mui/material'
import React, {useContext, useState} from 'react'
import Axios from "axios"
import MyContext from '../../Context'

const AskQuestion = () => {

  const dataFromContext = useContext(MyContext)
  const [agreeToPublish, setAgreeToPublish] = useState(false)
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')
  const [error, setError] = useState("")

  const askQ = async () => {
    Axios.post(`http://localhost:8000/api/addOneQ`, 
      {q:questionAsked, agreeToPublish:agreeToPublish, user:dataFromContext.userId})
      .then((response)=>{
        if(response.data.message){
          setQStatus(response.data.message)
        }
        else{
          console.log(response.data)
        }
      })
  }

  // useEffect(()=>{askQ()})

  const agree = () => {
    setAgreeToPublish(!agreeToPublish)
  }

  const noQ = () => {
    setError("אתה חייב להתחבר בשביל לשאול שאלה")
  }
  
  return (
    <div>
     <label>מה השאלה?</label>
     <input type="text" name='name' onChange={(e)=>{setQuestionAsked(e.target.value) }}/>
     <FormControlLabel control={<Checkbox onClick={()=>agree()}/>} label="האם אתה מסכים לפרסם את השאלה?" ></FormControlLabel>
     <Button onClick={() => dataFromContext.userId !== "" ? askQ() : noQ()}>שלח שאלה</Button>
     <p>{qStatus}</p>
     <div>{error}</div>
    </div>
  )
}

export default AskQuestion