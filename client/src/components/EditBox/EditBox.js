import React from 'react'
import { Input, FormControl, Button } from '@mui/material'

const EditBox = ({q_Text, setEditedQ, editQ, a_text, setEditedA, editA, tip_text,  setEditedTip, editTipToSend }) => {
 
  return (
    <div>
     {q_Text ?  <FormControl>
      <Input 
      defaultValue={q_Text} 
      multiline
      onChange={(e)=> setEditedQ(e.target.value) }
      >
        </Input>
       <Button onClick={()=> editQ()}>edit</Button>
        </FormControl> : <div></div>}
        {a_text ?
        <FormControl>
      <Input 
      defaultValue={a_text} 
      multiline
      onChange={(e)=> setEditedA(e.target.value) }
      >
        </Input>
       <Button onClick={()=> editA()}>edit</Button>
        </FormControl> : <div></div> }
        {tip_text ?
        <FormControl>
      <Input 
      defaultValue={tip_text} 
      multiline
      onChange={(e)=> setEditedTip(e.target.value) }
      >
        </Input>
       <Button onClick={()=> editTipToSend()}>edit</Button>
        </FormControl> : <div></div> }
    </div>

  )
}

export default EditBox