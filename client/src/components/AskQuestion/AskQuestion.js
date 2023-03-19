import { FormControlLabel, Checkbox, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Axios from "axios"

const AskQuestion = () => {
  // const [agreeToPublish, setAgreeToPublish] = useState(false)
  // const [questionAsked, setQuestionAsked] = useState("")
  // const [qStatus, setQStatus] = useState('')
  

  // const askQ = async () => {
  //   Axios.post(`http://localhost:8000/api/addOneQ`, 
  //     {q:questionAsked , AgreeToPublish:agreeToPublish})
  //     .then((response)=>{
  //       if(response.data.message){
  //         setQStatus(response.data.message)
  //       }else{
  //         console.log(response.data)
  //         setQStatus(response.data.username) 
  //       }
  //     })
  // }

  // useEffect(()=>{askQ()})

  return (
    <div>
     <label>מה השאלה?</label>
     <input type="text" name='name'/>
     <FormControlLabel control={<Checkbox />} label="האם אתה מסכים לפרסם את השאלה?" ></FormControlLabel>
    {/* //  onClick={()=> agreeToPublish === false ? setAgreeToPublish(true) : setAgreeToPublish(false) }/> */}
     {/* <Button onClick={askQ}>שלח שאלה</Button> */}
     {/* <p>{qStatus}</p> */}
    </div>
  )
}

export default AskQuestion