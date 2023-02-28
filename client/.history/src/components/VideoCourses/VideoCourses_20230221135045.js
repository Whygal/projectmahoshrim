import React from 'react'
import YoutubeEmbed from "./YouTubeEmbed"
import "./VideoCourses.css"

  const VideoCorses = () => {
    const VideosId = ["PTqRJv-nIAw","-QgTBQOBW4g"]
    
    return(
      <div className='allTheVideos'>
      <YoutubeEmbed embedId={() => VideosId.map(v => v)}></YoutubeEmbed>
      </div>
    )
  }
 
export default VideoCorses