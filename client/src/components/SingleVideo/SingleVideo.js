import React from 'react'
import YoutubeEmbed from '../VideoCourses/YoutubeEmbed'
import { useLocation, useParams } from 'react-router-dom'
import Title from '../VideoCourses/Title'
import "./style.css"
const SingleVideo = () => {
    const location = useLocation()
    const object = location.state.v
    const param = useParams()
  return (
    <div className='single'>
      <Title key={object} title={object.snippet.title}/>
      <YoutubeEmbed 
       embedId={param.id}/> 
       {/* <button onClick={()=>console.log(param)}>test</button> */}
  </div>
  )
}

export default SingleVideo