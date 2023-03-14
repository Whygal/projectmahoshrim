import React, {useEffect, useState} from "react";
import "./style.css";
import YoutubeEmbed from "./YoutubeEmbed";
// import {key} from "../../key/key"

// export default function App() {
// const [videos, setsVideo] = useState({})

const getVideos = async () => {
//   try{
//     const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&channelId=UC0fHnO_sETvwrpnXySUsOCA&part=snippet,id&order=date&maxResults=20`)
//     const answer = await response.json()
//     const data = answer.items
//     data.pop()
//     setsVideo(data)
//     } catch (err){
//   console.log(err)
// }
// }

// useEffect(()=>{
//   getVideos()
// })

  return (
    <div>
      khkkkhh
        {/* <div className='allTheVideos'>
       {videos.map((v) => 
       <YoutubeEmbed
       key={v}
       embedId={v.id.videoId}
       title={v.snippet.title}
       thumbnails={v.snippet.thumbnails.default.url}
       />
       )
       } */}
      {/* </div> */}
    </div>
  );
}