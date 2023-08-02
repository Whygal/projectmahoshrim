
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import "./style.css"

const Tip = ({tip}) => {
  const [color, setColor] = useState("#"+Math.floor((1<<24)*Math.random()|0).toString(16))
  return (
    <div className='tip' style={{backgroundColor:color}}>
      <TextField value={tip} >
      </TextField>
    </div>
  )
}

export default Tip