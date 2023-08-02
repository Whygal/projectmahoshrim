import React, {useEffect, useState} from "react";
import "./VideoCourses.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Title from "./Title";
import {Button} from "@mui/material"
import { ApiKey } from "../../Constants/Const";
import {Link} from "react-router-dom";

const VideoCourses = () => {
const [videos, setVideo] = useState({})
const [open, setOpen] = useState(false)

const updateVideos = async () => {
  try{
const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${ApiKey}&channelId=UC0fHnO_sETvwrpnXySUsOCA&part=snippet,id&order=date&maxResults=20`)
const ans = await res.json()
setVideo(ans)
setOpen(!open)
}catch(e){
  console.log(e)
}
}

  const setVideos = () => {
    console.log(videos);
    if(open){
    const enyVideo = videos.items
    enyVideo.splice(-1)
    return <div className="videos">
      {enyVideo.map((v)=> 
      <div key={v.id.videoId} className="lineTn">     
          <Link to={`/SingleVideo/${v.id.videoId}`} state={{v}}>
          <img
          className="TnImg" 
          src={v.snippet.thumbnails.default.url} alt="" 
          width={v.snippet.thumbnails.default.width} 
          height={v.snippet.thumbnails.default.height}
          />
          </Link>
          <div className="title">
          <Title key={v.snippet} title={v.snippet.title}/>
          </div>  
      </div>)}
      </div>
  }else{
      return <div></div>
    }
  }
  
  useEffect(()=>{setVideos()})
  return (
    <div>
        <div className='allTheVideos'>
          {setVideos()}
      {open === false ? <div className="all-Videos"><h1>שיעורים בנושא חינוך</h1>
      <div><YoutubeEmbed embedId="3NwjccuChuo"/>
      </div>
      <div><Button 
      onClick={() => updateVideos()} 
      key={1} 
      variant="contained"
      sx={{backgroundColor: "#0ab1a0"}}
      >שיעורים נוספים</Button></div></div> : <div></div>}
      </div>
    </div>
  );
}

export default VideoCourses