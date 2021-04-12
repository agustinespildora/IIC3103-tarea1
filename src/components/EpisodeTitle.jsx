import React from "react";


function EpisodeTitle(props) {
  const {page, title, episodeId, displayEpisode} = props;


  return (
    <div>
      <p onClick={() => {
        displayEpisode(episodeId);
      }}>
        {title}
      </p>
    </div>
  );
}

export default EpisodeTitle;
