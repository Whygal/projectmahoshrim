import React from 'react'

const MangerToolKit = ({q_id, q_idToDel, a_id, a_idToDel, editFunc, q_Text, a_Text, toAnsQ, editAnsFunc, tip, tipId, deleteTip, editTip, 
  userIdRemoveBlock, delBlock}) => {
  
  return (
    <div>
      {/* Q func */}
      {q_id ?  <button onClick={()=> q_idToDel(q_id)}>מחק שאלה</button> : <div></div>}
      {q_id ?  <button onClick={() => editFunc(q_Text, q_id)}>ערוך שאלה</button> : <div></div>}
      {toAnsQ ? <button onClick={() => toAnsQ(q_id)}>שלח תשובה</button>: <div></div>}

      {/* A func */}
      {a_id ? <button onClick={()=> a_idToDel(a_id)}>מחק תשובה</button>: <div></div>}
      {a_id ?  <button onClick={() => editAnsFunc(a_Text, a_id)}>ערוך תשובה</button> : <div></div>}

      {/* tip func */}
      {tip ? <button onClick={()=> deleteTip(tipId)}>מחק טיפ</button>: <div></div>}
      {tip ? <button onClick={()=> editTip(tipId, tip)}>ערוך טיפ</button>: <div></div>}

      {userIdRemoveBlock ? <div><button onClick={()=> delBlock(userIdRemoveBlock)}>הסר מחיקה</button></div> : <div></div>}
    </div>
  )
}

export default MangerToolKit