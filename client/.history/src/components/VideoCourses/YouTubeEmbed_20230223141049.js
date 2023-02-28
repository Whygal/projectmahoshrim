import React from 'react'
import PropTypes from "prop-types";
import { Grid } from '@mui/material'

  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <Grid justify='center' container spacing={16}>
        <Grid item sx={12}>
                <Grid sx={8}>
              <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              </Grid>
              {/* <Grid sx={4}>

              </Grid> */}
      </Grid>
      </Grid>
    </div>
  );
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

  export default YoutubeEmbed;