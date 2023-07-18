import React, {useState} from 'react'
import "./style.css"
import { TextField } from '@mui/material'

const Question = ({q,a,user}) => {
    const [ans, setAns] = useState([])
    const [open, setOpen] = useState(false)
    
  const handleAChange = () =>{
    setOpen(!open)
    if(open){
      setAns(a)
    }else{
      setAns([])
    }
  }


  return (
    <div>
      <div>
      <TextField
          id="outlined-read-only-input"
          label={user ? user.username + " שואל:" : ""}
          // defaultValue="Hello World"
          onClick={() => handleAChange()}
          value={q}
          InputProps={{
            readOnly: true,
          }}
          color="secondary" 
          focused 
        >  
       </TextField>
       </div>
              <div>
              {ans}
              </div>
    </div>
  )
}

export default Question