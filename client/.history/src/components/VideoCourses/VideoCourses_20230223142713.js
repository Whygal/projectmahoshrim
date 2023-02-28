import React, {useEffect} from 'react'
import YoutubeEmbed from "./YouTubeEmbed"
import Youtube from '../../Axios/Youtube'

import "./VideoCourses.css"

  const VideoCorses = () => {
    const videosId = ["PTqRJv-nIAw","-QgTBQOBW4g"]

    const apiAccess = async (data) => {
      const response = Youtube.get("videoData", {params: {q: data}})
      console.log(response)
    }
    const result = apiAccess()
    useEffect(()=>{
      console.log(result)
    })
    return(
      <div className='allTheVideos'>
       {videosId.map((v) => 
       <YoutubeEmbed
       key={v}
       embedId={v}
       />
       )
       } 
      </div>
    )
  }
 
export default VideoCorses