import React from 'react'
import PropTypes from "prop-types";
import VideoTitle from './VideoTitle';
import Ty
  const YoutubeEmbed = ({ embedId,title }) => {
    return(
    <div className="video-responsive">
              <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <div>
                <VideoTitle title={title} />
                </div>
    </div>
  )};
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

  export default YoutubeEmbed;