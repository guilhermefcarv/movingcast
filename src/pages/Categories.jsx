import React from "react";
import { useLocation } from 'react-router-dom';

const Categories = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <ul>
            <li>Finanças</li>
            <li>Sociais</li>
            <li>Técnicas</li>
            <li>Autorais</li>
        </ul>
    )
}

export default Categories;