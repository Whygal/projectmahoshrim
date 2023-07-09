import React from 'react'
import { Input, FormControl, Button } from '@mui/material'

const AnsBox = ({setToAns, postAns, }) => {

    const ansFunc = (e) =>{
        setToAns(e.target.value)
      }

  return (
    <FormControl>
        <Input
        onChange={ansFunc}
        multiline
        >
        </Input>
        <Button onClick={()=> postAns()}>POST Answer</Button>
    </FormControl>
  )
}

export default AnsBox