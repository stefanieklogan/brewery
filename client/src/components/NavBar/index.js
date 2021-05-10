import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({

    navStyle: {
        backgroundColor: "#efe9dd",
    }
})

function NavBar() {
    const styles = useStyles();
    return (
        <div>
            <div className={styles.navStyle}>
            <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav nav-fill w-50">
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
    </div>
</div>
        
    )
}

export default NavBar