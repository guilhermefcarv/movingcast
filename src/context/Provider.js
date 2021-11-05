// provider que servirá todos os dados aos componentes envolvidor por ele ( no App).

import React, { useEffect, useState } from 'react';
// importar serviços
import Context from './Context';
import podcastsMock, { categoriesMock } from '../services/mockAPI';

function Provider({ children }) {
    // array de objetos com titulo, subtitulo e imagem do podcast
    const [podcasts, setPodcasts] = useState([]);
    // array de categorias com nome da categoria
    const [categories, setCategories] = useState([]);
    // array de objetos de podcasts filtrados
    const [podcastsF, setPodcastsF] = useState([]);

    function getAndSetPodcasts() {
        setPodcasts(podcastsMock);
        // agr os podcasts mockados estão disponiveis para tds
        // os componentes que são filho do componente Provider.
    }

    function getAndSetCategories() {
        setCategories(categoriesMock);
        // agr as categories mockadas estao disponiveis para tds
        // os componentes q são filho do provider..
    }

    function getPodcastsByCategory(categorieString) {
        console.log(`getPodcastsByCategory ${categorieString}`)
        const podcastsFiltered = podcasts.filter((podcast) => podcast.categorias.includes(categorieString));
        console.log(podcastsFiltered);
        return podcastsFiltered;
    }

    useEffect(() => {
        // toda vez q o componente Provier for renderizado
        // essas duas funções abaixo serão chamadas.
        getAndSetCategories();
        getAndSetPodcasts();
    })
    const dataValue = {
        podcasts,
        categories,
        getPodcastsByCategory,
        podcastsF,
        setPodcastsF,
    };

    return (
        <Context.Provider value={ dataValue } >
            { children }
        </Context.Provider>
    );
}

export default Provider;