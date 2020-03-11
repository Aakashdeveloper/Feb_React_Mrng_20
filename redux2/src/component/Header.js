import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/"><h1>My APP</h1></Link>
            </div>
        </header>
    )
}

export default Header;