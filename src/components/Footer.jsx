import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <Link to="/"><p>Moving Cast ❤</p></Link>
            </div>
        </footer>
    )
}

export default Footer;