import React from "react";
import EpisodeTitle from './EpisodeTitle'


function EpisodeList(props) {
  const {page, season, series, displayEpisode} = props;

  function selectEpisodes(page, season, series) {
    async function get() {
      const episodes = await fetch(
        'https://www.breakingbadapi.com/api/episodes'
      );

      const episodesJSON = await episodes.json();
      return episodesJSON;
    }
    get().then(episodesJSON => {
      page.episodesJSON = episodesJSON; 
    });
    const l = page.episodesJSON.length;
    for (var i = 0; i < l; i++) {
      var e = page.episodesJSON[i]
      if (e["season"] == season && e["series"] == series){
          var title = e["title"]
          var episodeId = e["episode_id"]
          if (page.test.indexOf(title) == -1){
            page.test.push(title);
            page.episodes.push(<EpisodeTitle page={page} title={title} episodeId={episodeId} displayEpisode={displayEpisode}/>);
          }
      }
    }
    return page.episodes;
  }

  return (
    <div>
      <div>
        <h2>{series}</h2>
        <h3>Season {season} Episodes</h3>
      </div>
      <div>
        {selectEpisodes(page, season, series)}
      </div>
    </div>
  );
}

export default EpisodeList;
