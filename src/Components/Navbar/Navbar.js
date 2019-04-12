import React from 'react';
import './Navbar.scss';
import Logo from '../../logo.png';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src = {Logo} alt='City Tour Logo'></img>
            <ul className="nav-links">
                <li className="nav-link">
                    <a href="/">Home</a>
                </li>
                <li className="nav-link">
                    <a href="/">About</a>
                </li>
                <li className="nav-link active">
                    <a href="/">Tour</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;