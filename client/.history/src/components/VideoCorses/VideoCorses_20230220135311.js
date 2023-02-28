import React from 'react'

const VideoCorses = () => {
  const getVideos = async function () {
    try {
      const response = await fetch("");
      const answer = await response.json();
      
      setProductsInCat(answer);
      setProducts(answer);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div></div>
  )
}

export default VideoCorses