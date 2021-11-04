import React from "react";
import { Link } from 'react-router-dom';

function Podcast(objPodcast) {
    return (
        <div class="podcast-card">
            <h1>{objPodcast.nome}</h1>
            <img src={objPodcast.imgSrc} alt="Imagem podcast"></img>
            <iframe src={objPodcast.playlist} width="430" height="340" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
        </div>
    )
}

export default Podcast;