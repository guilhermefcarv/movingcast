import React from "react";

function Header() {
    const getTitle = () => {
        const path = window.location.pathname; // pega  url atual;
        let title;
        if(path.includes('categories')) {
            return 'Categorias';
        }
        if(path.includes('episodes')) {
            return 'Episódios'
        }
        if(path.includes('podcasts')) {
            return 'Podcasts'
        }
    }
    return (
        <header>
            <div class="banner">
                <h1>
                    { getTitle() }
                </h1>
                <p>Subtítulo</p>
            </div>
        </header>
    );
}
<header>
        <div id="menu">
            <a id="home" href="./index.html">Framework</a>
            <a href="" id="categories">Categorias</a>
        </div>
        
        
        
        
</header>
    
export default Header;