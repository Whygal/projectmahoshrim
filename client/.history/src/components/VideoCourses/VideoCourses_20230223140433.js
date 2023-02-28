import React from 'react'
import YoutubeEmbed from "./YouTubeEmbed"
import Youtube from '../../Axios/Youtube'

import "./VideoCourses.css"

  const VideoCorses = () => {
    const videosId = ["PTqRJv-nIAw","-QgTBQOBW4g"]
    
    // const getVideo = () => {

    // }
    
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