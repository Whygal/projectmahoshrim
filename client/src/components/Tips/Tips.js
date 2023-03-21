import React, {useEffect, useState} from 'react'
import Tip from './Tip.js'
const Tips = () => {
  const [tips, setTips] = useState([])

  const getTips = async() => {
    const response = await fetch("http://localhost:8000/api/getTips")
    const answer = await response.json()
    setTips(answer)
  }

  useEffect(()=>{getTips()})

  return (
    <div>{tips.map((t)=>
    <Tip
    key={t._id}
    tip={t.tip}
    />
    )}
      </div>
  )
}

export default Tips