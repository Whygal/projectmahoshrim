import React from 'react'
import "./style.css"
import axios from 'axios'
import { Button } from '@mui/material'
const Users = ({username, userId, email}) => {

    const deleteAndBlockUser = async(userId, email, username) => {
     await axios.post(`http://localhost:8000/api/blockUser`, {email:email, username: username})
    .then((res)=> console.log(res))
      await axios.delete(`http://localhost:8000/api/deleteUser/${userId}`) 
      .then((res)=> console.log(res))
    }

  return (
    <div>
        <div>{username}</div>
        <Button  onClick={()=> deleteAndBlockUser(userId, email, username)}>מחק וחסום משתמש זה</Button>
    </div>
  )
}

export default Users