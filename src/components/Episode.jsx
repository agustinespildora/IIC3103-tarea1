import React from "react";
import Character from './Character'

function Episode(props) {
  const { page, id, episodeDetails } = props;

  function decompressCharacters() {
    var charactersArray = []
    const characterJSON = episodeDetails["characters"];
    for (const field in characterJSON){
      charactersArray.push(<Character name={characterJSON[field]}/>)
    }
    return charactersArray;
  }
  return (
    <div>
        <p>Id del Episodio: {episodeDetails["episode_id"]}</p>
        <p>Serie: {episodeDetails["series"]}</p>
        <p>Título: {episodeDetails["title"]}</p>
        <p>Temporada: {episodeDetails["season"]}</p>
        <p>Episodio: {episodeDetails["episode"]}</p>
        <p>Fecha de estreno: {episodeDetails["air_date"]}</p>
        <p>Personajes: </p>
        <div>
          {decompressCharacters()}
        </div>
    </div>
  );
}

export default Episode;
