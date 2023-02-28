import React from 'react'
import PropTypes from "prop-types";
import { Grid } from '@mui/material'
import VideoTitle from './VideoTitle';

  const YoutubeEmbed = ({ embedId,title }) => {
    return(
    <div className="video-responsive">
      <Grid justify='center'>
        <Grid>
                <Grid>
              <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              </Grid>
              <Grid>
                <VideoTitle/>
              </Grid>
      </Grid>
      </Grid>
    </div>
  )};
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

  export default YoutubeEmbed;