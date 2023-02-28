import React, {useEffect, useState} from 'react'

const VideoCorses = () => {
  const [videoCorses, setVideoCorses] = useState({})
  const getVideos = async function () {
    try {
      const response = await fetch("https://www.googleapis.com/youtube/v3/GET/channels");
      const answer = await response.json();
      setVideoCorses(answer)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getVideos()
  })
   console.log(videoCorses)
  return (
    <div></div>
  )
}

export default VideoCorses