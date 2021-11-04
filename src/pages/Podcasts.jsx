import React, { useContext, useEffect, useState } from "react";
import CardPodcast from '../components/CardPodcast';
import Context from "../context/Context";

const Podcasts = (categorie) => {
    const [podcastsF ,setPodcastsF] = useState([]);
    const { getPodcastsByCategory } = useContext(Context);
    useEffect(() => {
        function filterP() {
            const podcastsFiltered = getPodcastsByCategory(categorie);
            setPodcastsF(podcastsFiltered);
        }
        filterP();
    }, categorie);
    return (
        <ul>
            {
                
            }
        </ul>
    )
}

export default Podcasts;
