import React, { useContext, useEffect, useState } from "react";
import CardPodcast from '../components/CardPodcast';
import Context from "../context/Context";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Podcasts = () => {
    const [podcastsF, setPodcastsF] = useState([]);
    const { getPodcastsByCategory } = useContext(Context);
    let location = useLocation();
    function setCategory() {
        if(location.pathname.includes('sociais')) {
            category = 'Social';
        }
        if(location.pathname.includes('tecnicos')) {
            category = 'Técnico'
        }
        if(location.pathname.includes('financas')) {
            category = 'Finanças'
        }
        if(location.pathname.includes('autorais')) {
            category = 'Autorais'
        }
        console.log(category);
    }
    let category = 'default';
    useEffect(() => {
        function filterP() {
            setCategory();
            const podcastsFiltered = getPodcastsByCategory(category);
            setPodcastsF(podcastsFiltered);
        }
        filterP();
    }, category);
    return (
        <>
            <Header/>
                <div className="podcasts-encontrados">
                    <h1>Podcasts encontrados:</h1>
                    {
                        podcastsF.map((p) => CardPodcast(p))
                    }
                </div>
            <Footer/>
        </>
    )
}

export default Podcasts;
