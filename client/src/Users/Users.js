import React from 'react'
import "./style.css"
import axios from 'axios'
const Users = ({username, userId, email}) => {

    const deleteAndBlockUser = async(userId, email) => {
     await axios.post(`http://localhost:8000/api/blockUser`, {email:email})
    .then((res)=> console.log(res))
      await axios.delete(`http://localhost:8000/api/deleteUser/${userId}`) 
      .then((res)=> console.log(res))
    }

  return (
    <div>
        <div>{username}</div>
        <button onClick={()=> deleteAndBlockUser(userId, email)}>Delete & Block User</button>
        {/* <button onClick={()=> console.log(email)}>test</button> */}
    </div>
  )
}

export default Users