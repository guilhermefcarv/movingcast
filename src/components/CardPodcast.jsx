import React from "react";
import { Link } from 'react-router-dom';

function CardPodcast(objPodcast) {
    return (
        <Link to={ `/categories/podcast/${objPodcast.id}`}>
            <div className="podcast-card">
                <h1>{objPodcast.nome}</h1>
                <img src={objPodcast.imgSrc} alt="Imagem podcast"></img>
            </div>
        </Link> 
    )
}

export default CardPodcast;