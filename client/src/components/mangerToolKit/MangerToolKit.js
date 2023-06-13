import React, {useState} from 'react'
import EditBox from './EditBox'
const MangerToolKit = ({q_id, q_idToDel, a_id, a_idToDel, editQ, q_Text}) => {
  const [editBoxOpen , setEditBoxOpen] = useState(false)

  return (
    <div>
      {q_id ?  <button onClick={()=> q_idToDel(q_id)}>delete Q</button> : <div></div>}
      {/* {q_id ?  <button onClick={()=> editBoxOpen === false ?setEditBoxOpen(!editBoxOpen) &&
         <div>{EditBox(q_Text)}</div> : <div></div>}>edit Q</button> : <div></div>} */}
      {a_id ? <button onClick={()=> a_idToDel(a_id)}>delete A</button>: <div></div>}
    </div>
  )
}

export default MangerToolKit