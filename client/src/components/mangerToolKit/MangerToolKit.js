import React from 'react'
import { Button } from '@mui/material'
const MangerToolKit = ({q_id, q_idToDel, a_id, a_idToDel, editFunc, q_Text, a_Text, toAnsQ, editAnsFunc, tip, tipId, deleteTip, editTip, 
  userIdRemoveBlock, delBlock}) => {
  
  return (
    <div>
      {/* Q func */}
      {q_id ?  <Button color='secondary' onClick={()=> q_idToDel(q_id)}>מחק שאלה</Button> : <div></div>}
      {q_id ?  <Button color='secondary' onClick={() => editFunc(q_Text, q_id)}>ערוך שאלה</Button> : <div></div>}
      {toAnsQ ? <Button color='secondary' onClick={() => toAnsQ(q_id)}>שלח תשובה</Button>: <div></div>}

      {/* A func */}
      {a_id ? <Button color='secondary' onClick={()=> a_idToDel(a_id)}>מחק תשובה</Button>: <div></div>}
      {a_id ?  <Button color='secondary' onClick={() => editAnsFunc(a_Text, a_id)}>ערוך תשובה</Button> : <div></div>}

      {/* tip func */}
      {tip ? <Button color='secondary' onClick={()=> deleteTip(tipId)}>מחק טיפ</Button>: <div></div>}
      {tip ? <Button color='secondary' onClick={()=> editTip(tipId, tip)}>ערוך טיפ</Button>: <div></div>}

      {userIdRemoveBlock ? <div><Button color='secondary' onClick={()=> delBlock(userIdRemoveBlock)}>הסר מחיקה</Button></div> : <div></div>}
    </div>
  )
}

export default MangerToolKit