import React from 'react';
import './Navbar.css';
import icon from './images/trollface.png';

export default function Navbar() {
    return (
        <div className='navbar'>
            <img className='logo' src={icon} alt='logo'></img>
            <p>Meme Generator</p>
        </div>
    )
}