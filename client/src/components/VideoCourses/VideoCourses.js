import React, {useEffect, useState} from "react";
import axios from "axios"
import "./style.css";
import YoutubeEmbed from "./YoutubeEmbed";
import {key} from "../../key/key"
// import { videos } from "./check";

export default function VideoCourses() {
const [videos, setVideos] = useState({})
// console.log(videos)

const getVideos = async () => {
  try{
    // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0fHnO_sETvwrpnXySUsOCA7&key=${key}`)
    // const answer = await response.json()
    // const data = answer.items
    // // data.pop()
    // setVideos(data)
    // console.log(data)
    const result = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        part: 'id,snippet',
        maxResults: 10,
        playlistId: "UU0fHnO_sETvwrpnXySUsOCA",
        key: key
      }
    });
    console.log(result)
    } catch (err){
  console.log(err)
}
}

useEffect(()=>{
  getVideos()
})

  return (
    <div>
        <div className='allTheVideos'>
       {/* {videos.map((v) => 
       <YoutubeEmbed
       key={v}
       embedId={v.id.videoId}
       title={v.snippet.title}
       thumbnails={v.snippet.thumbnails.default.url}
       />
       )
       } */}
      </div>
    </div>
  );
}