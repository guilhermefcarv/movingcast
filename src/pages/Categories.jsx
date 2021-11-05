import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <Header/>
            <div className="categorias">
                <h3>Escolha uma categoria de podcast =)</h3>
                <div id="menu">
                    <nav>
                        <div className="mobile-menu">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <ul className="nav-list">
                            <li><Link to={`/categories/financas`}>Finanças</Link></li>
                            <li><Link to={`/categories/sociais`}>Sociais</Link></li>
                            <li><Link to={`/categories/tecnicos`}>Tecnicos</Link></li>
                            <li><Link to={`/categories/autorais`}>Autorais</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Categories;