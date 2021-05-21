import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Image from 'react-bootstrap/Image';
import Logo from "../../assets/Celebration_LogoBLACK.png";
// import Row from 'react-bootstrap/Row';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';



const useStyles = makeStyles({

    navStyle: {
        backgroundColor: "#c89019",
        color: "#bd8a1f",
    },
    image: {
        height: '75px',
        width: "90px",
    }
})

const font = 'Barlow, Playfair Display';

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
})

function NavBar() {
    const styles = useStyles();
    return (
        <div>
            <div className={styles.navStyle}>
                <nav className="navbar navbar-expand-lg navbar-light">
                <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fixed ="true"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <ThemeProvider theme={theme}>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav nav-fill w-50">
                            {/* <li className="nav-item">

                            <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fixed ="true"/>

                            </li> */}
                            <li className="nav-item">
                                <Link style={{color:"white", fontSize:"18px"}} className="nav-link" to="/"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color:"white", fontSize:"18px"}} className="nav-link" to="/beer"> Beer </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color:"white", fontSize:"18px"}} className="nav-link" to="/about"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color:"white", fontSize:"18px"}} className="nav-link" to="/contact"> Contact </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color:"white", fontSize:"18px"}} className="nav-link" to="/visit"> Visit </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/signup"> NewsletterSignup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/adminsignup"> AdminSignup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/adminlogin"> AdminLogin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/feedbackresults"> FeedbackResults  </Link>
                            </li> */}
                            {/* <a href='https://untappd.com/CelebrationBrewing?ref=followbtn'><img alt="like brewery on untappd" className="right" src='https://untappd.akamaized.net/social/ut_follow_sm.png' /></a> */}
                        </ul>
                    </div>
                    </ThemeProvider>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;