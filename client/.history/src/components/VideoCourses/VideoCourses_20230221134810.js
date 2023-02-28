import React from 'react'
import YoutubeEmbed from "./YouTubeEmbed"
import "./VideoCourses.css"

  const VideoCorses = () => {
    const VideosId = ["PTqRJv-nIAw"]
    return(
      <div className='allTheVideos'>
      <YoutubeEmbed embedId={VideosId[0]}></YoutubeEmbed>
      </div>
    )
  }
 
export default VideoCorses