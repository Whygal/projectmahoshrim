import React from 'react'

const Tn = ({thumbnails, title}) => {
  return (
    <div><img src={thumbnails} alt=""/><div>{title}</div></div>
  )
}

export default Tn