import React from 'react'
import PropTypes from "prop-types";
import VideoTitle from './VideoTitle';
import {Grid} from "@emotion/styled"
  const YoutubeEmbed = ({ embedId,title }) => {
    return(
    <div className="video-responsive">
      <Grid>
              <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
                <VideoTitle title={title} />
      </Grid>          
    </div>
  )};
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

  export default YoutubeEmbed;