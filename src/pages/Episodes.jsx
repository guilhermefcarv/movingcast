import React from "react";
import { useParams } from "react-router-dom";
import getById from '../services/getPodcastById';
import podcastsMock from '../services/mockAPI';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Episodes() {

    const { id } = useParams();
    const objPodcast = getById(id, podcastsMock);
    return (
        <>
            <Header/>
            <div className="playlist">
                <h1 className="title-podcast">{objPodcast.nome}</h1>
                <p className="description">{objPodcast.descricao}</p>
                <iframe src={objPodcast.playlist} width="430" height="340" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
            <Footer/>
        </>
    )
}

export default Episodes;