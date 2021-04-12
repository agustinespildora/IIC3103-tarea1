import React, { useState } from "react";
import EpisodeList from './EpisodeList'
import Episode from './Episode'


function Menu(props) {
    const { page } = props;

    const [seasonsClass, setSeasonsClass] = useState('show');
    const [episodesListClass, setEpisodesListClass] = useState('hidden');
    const [episodeClass, setEpisodeClass] = useState('hidden');
    const [season, setSeason] = useState(0);
    const [series, setSeries] = useState('');
    const [episodeId, setEpisodeId] = useState(0);
    const [episodeDetails, setEpisodeDetails] = useState({});


    function displayEpisodesList(season, series) {
        
        setSeason(season);
        setSeries(series);

        setEpisodesListClass('show');
        setSeasonsClass('hidden');
    }

    function displayEpisode(id) {
        async function get() {
            const episode = await fetch(
                'https://www.breakingbadapi.com/api/episodes/' + id.toString()
            );
            const episodeJSON = await episode.json();
            return episodeJSON;
        }
        get().then(episodeJSON => {
            setEpisodeDetails(episodeJSON[0]);
        });
        setEpisodeId(id);
        
        setEpisodeClass('show');
        setEpisodesListClass('hidden');
    }

    return (
        <div>
            <div className="titulo">
                <h1>Breaking Bad - Better Call Saul API</h1>
            </div>
            <div className={seasonsClass}>
                <div>
                    <p>Breaking Bad SEASONS</p>
                    <li onClick={ () => displayEpisodesList(1, "Breaking Bad")}>
                        Season 1
                    </li>
                    <li onClick={ () => displayEpisodesList(2, "Breaking Bad")}>
                        Season 2
                    </li>
                    <li onClick={ () => displayEpisodesList(3, "Breaking Bad")}>
                        Season 3
                    </li>
                    <li onClick={ () => displayEpisodesList(4, "Breaking Bad")}>
                        Season 4
                    </li>
                    <li onClick={ () => displayEpisodesList(5, "Breaking Bad")}>
                        Season 5
                    </li>
                </div>
                <div>
                    <p>Better Call Saul SEASONS</p>
                    <li onClick={ () => displayEpisodesList(1, "Better Call Saul")}>
                        Season 1
                    </li>
                    <li onClick={ () => displayEpisodesList(2, "Better Call Saul")}>
                        Season 2
                    </li>
                    <li onClick={ () => displayEpisodesList(3, "Better Call Saul")}>
                        Season 3
                    </li>
                    <li onClick={ () => displayEpisodesList(4, "Better Call Saul")}>
                        Season 4
                    </li>
                    <li onClick={ () => displayEpisodesList(5, "Better Call Saul")}>
                        Season 5
                    </li>
                    <li onClick={ () => displayEpisodesList(6, "Better Call Saul")}>
                        Season 6
                    </li>
                </div>
            </div>
            <div className={episodesListClass}>
                <EpisodeList page={page} season={season} series={series} displayEpisode={displayEpisode}/>
            </div>
            <div className={episodeClass}>
                <Episode page={page} id={episodeId} episodeDetails={episodeDetails} />
            </div>
        </div>

    );
}

export default Menu;
