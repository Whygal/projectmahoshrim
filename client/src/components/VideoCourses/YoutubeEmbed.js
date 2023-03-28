import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
const YoutubeEmbed = ({ embedId, thumbnails ,title }) => (
  <div className="tn">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <Title title={title}></Title>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;