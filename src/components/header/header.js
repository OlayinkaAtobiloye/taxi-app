import React from "react";
import Image from '../../images/Ellipse 1.png';
import './header.css';

const Header = () => {
    return(
    <header className="header">
        <h1>Hello, MK Taxi</h1>
        <img src={Image}/>
    </header>
    )
}

export default Header;