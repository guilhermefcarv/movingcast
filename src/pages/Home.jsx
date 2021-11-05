import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import podcastsMock, { categoriesMock } from '../services/mockAPI';
import CardPodcast from '../components/CardPodcast';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
            <Header/>
                <div className="podcasts-semanais">
                    <div className="acessarCategoria">
                        <Link to='/categories'>
                            Acessar categorias
                        </Link>
                    </div>
                    <label>Melhores da semana</label>
                    <main id="main">
                        {
                            podcastsMock.map((p) => CardPodcast(p))
                        }
                    </main>
                </div>
            <Footer/>
        </>
    )
}

export default Home;