import React, {useEffect, useState} from "react";
import axios from "axios";
import "./VideoCourses.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Title from "./Title";
import {Button} from "@mui/material"

const VideoCourses = () => {
const [videos, setVideo] = useState({})
const [open, setOpen] = useState(false)
const updateVideos = async () => {
  try{
const resKey = await axios.get("http://localhost:8000/api/getYtKey")
.then((ans)=> ans.data.apiKey)
const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${resKey}&channelId=UC0fHnO_sETvwrpnXySUsOCA&part=snippet,id&order=date&maxResults=20`)
const ans = await res.json()
setVideo(ans)
setOpen(!open)
}catch(e){
  console.log(e)
}
}

  const setVideos = () => {
    if(open){
    const enyVideo = videos.items
    enyVideo.splice(-1)
    return <div className="videos">{enyVideo.map((v)=> <div><YoutubeEmbed key={v.id} embedId={v.id.videoId}></YoutubeEmbed><div className="title"><Title key={v.snippet} title={v.snippet.title}></Title></div></div>)}</div>
  }else{
      return <div></div>
    }
  }
  
  useEffect(()=>{setVideos()})
  return (
    <div>
        <div className='allTheVideos'>
          {setVideos()}
      {open === false ? <Button onClick={() => updateVideos()} key={1}>פתח שיעורים</Button> : <div></div>}
      </div>
    </div>
  );
}

export default VideoCourses