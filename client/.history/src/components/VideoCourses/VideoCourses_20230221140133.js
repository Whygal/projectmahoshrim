import React from 'react'
import YoutubeEmbed from "./YouTubeEmbed"
import "./VideoCourses.css"

  const VideoCorses = () => {
    const videosId = ["PTqRJv-nIAw","-QgTBQOBW4g"]
    
    return(
      <div className='allTheVideos'>
       {videosId.map((v) => 
       <YoutubeEmbed
       key={v}
       embedId={v}
       />
       )
       } 
      <YoutubeEmbed embedId={videosId[0]}></YoutubeEmbed>
      </div>
    )
  }
 
export default VideoCorses