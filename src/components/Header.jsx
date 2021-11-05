import React from "react";

function Header() {
    const getTitle = () => {
        const path = window.location.pathname; // pega  url atual;
        let title;
        if(path.includes('financas')) {
            return 'Podcasts sobre finanças';
        }
        if(path.includes('sociais')) {
            return 'Podcasts sobre sociedade';
        }
        if(path.includes('tecnicos')) {
            return 'Podcasts técnicos';
        }
        if(path.includes('categories')) {
            return 'Categorias';
        }
        if(path.includes('episodes')) {
            return 'Episódios'
        }
        if(path.includes('podcasts')) {
            return 'Podcasts'
        } else {
            return 'Moovingcast'
        }
    }
    return (
        <header>
            <div className="banner">
                <h1>
                    { getTitle() }
                </h1>
                <p>Acelerando sua carreira a um play de distância</p>
            </div>
        </header>
    );
}
    
export default Header;