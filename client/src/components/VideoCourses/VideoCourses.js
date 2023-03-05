import React, { useState, useEffect } from 'react'
import YoutubeEmbed from "./YouTubeEmbed"
import "./VideoCourses.css"
import key from "./key"
  const VideoCorses = () => {
    const [videos, setVideos] = useState([])
    
    const getVideos = async () => {
      try{
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&channelId=UC0fHnO_sETvwrpnXySUsOCA&part=snippet,id&order=date&maxResults=20`)
        const answer = await response.json()
        const data = answer.items
        data.pop()
        setVideos(data)
        } catch (err){
      console.log(err)
    }
    }

    useEffect(()=>{
      getVideos();
    },[])
    
    return(
      <div className='allTheVideos'>
       {videos.map((v) => 
       <YoutubeEmbed
       key={v}
       embedId={v.id.videoId}
       title={v.snippet.title}
       thumbnails={v.snippet.thumbnails.default.url}
       />
       )
       }
      </div>
    )
  }
 
export default VideoCorses