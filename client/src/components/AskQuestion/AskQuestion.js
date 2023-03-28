import { FormControlLabel, Checkbox, Button } from '@mui/material'
import React, {useState, useContext} from 'react'
import MyContext from '../../Context'
import Axios from "axios"
import { BASE_URL } from '../../Constants/Const'

const AskQuestion = () => {
  const [agreeToPublish, setAgreeToPublish] = useState(false)
  const [questionAsked, setQuestionAsked] = useState("")
  const [qStatus, setQStatus] = useState('')
  const dataFromContext = useContext(MyContext)
  console.log(dataFromContext.username)


  const askQ = async () => {
    Axios.post(`http://localhost:8000/api/addOneQ`, 
      {q:questionAsked , AgreeToPublish:agreeToPublish, username:dataFromContext.username})
      .then((response)=>{
        if(response.data.message){
          setQStatus(response.data.message)
        }else{
          console.log(response.data)
          setQStatus(response.data.username) 
        }
      })
      console.log(agreeToPublish);
      console.log(qStatus);
  }

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