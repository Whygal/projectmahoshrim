import React, {useEffect, useState} from 'react'
import Tip from './Tip.js'
import { Stack } from '@mui/material'

const Tips = () => {
  const [tips, setTips] = useState([])

  const getTips = async() => {
    const response = await fetch("http://localhost:8000/api/getTips")
    const answer = await response.json()
    setTips(answer)
  }

  useEffect(()=>{getTips()})

  return (
    <div>
      <Stack spacing={2}>
      {tips.map((t)=>
          <Tip
          key={t._id}
          tip={t.tip}
          />    
    )}
    </Stack>
      </div>
  )
}

export default Tips