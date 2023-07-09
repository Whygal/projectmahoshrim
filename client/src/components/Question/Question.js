import React, {useState} from 'react'

import "./style.css"

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
      <div>{user ? user.username + " שואל:" : ""}</div>
      <div>
              <div onClick={() => handleAChange()}>
                    <div className='Q'>
                      {q}
                      </div>
              {ans}
              </div>
       </div>
    </div>
  )
}

export default Question