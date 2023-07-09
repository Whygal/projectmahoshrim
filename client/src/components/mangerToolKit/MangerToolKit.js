import React from 'react'

const MangerToolKit = ({q_id, q_idToDel, a_id, a_idToDel, editFunc, q_Text, a_Text, toAnsQ, editAnsFunc, tip, tipId, deleteTip, editTip}) => {
  
  return (
    <div>
      {/* Q func */}
      {q_id ?  <button onClick={()=> q_idToDel(q_id)}>delete Q</button> : <div></div>}
      {q_id ?  <button onClick={() => editFunc(q_Text, q_id)}>edit Q</button> : <div></div>}
      {toAnsQ ? <button onClick={() => toAnsQ(q_id)}>post answer</button>: <div></div>}

      {/* A func */}
      {a_id ? <button onClick={()=> a_idToDel(a_id)}>delete A</button>: <div></div>}
      {a_id ?  <button onClick={() => editAnsFunc(a_Text, a_id)}>edit A</button> : <div></div>}

      {/* tip func */}
      {tip ? <button onClick={()=> deleteTip(tipId)}>delete tip</button>: <div></div>}
      {tip ? <button onClick={()=> editTip(tipId, tip)}>edit tip</button>: <div></div>}
    </div>
  )
}

export default MangerToolKit