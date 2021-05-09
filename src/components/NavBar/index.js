import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <body className="color">
            <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
        <Link className="nav-link" to="/"> Home </Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link" to="/beer"> The Beer </Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link" to="/about"> About Us</Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link" to="/events"> Events </Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link" to="/visit"> Find Us </Link>
            </li>
            </ul>
        </div>
    </nav>
    </body>
</div>
        
    )
}

export default NavBar