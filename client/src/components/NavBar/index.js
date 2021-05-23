import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Image from 'react-bootstrap/Image';
import Logo from "../../assets/Celebration_LogoBLACK.png";
// import Row from 'react-bootstrap/Row';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";



const useStyles = makeStyles({

    navStyle: {
        backgroundColor: "#c89019",
        // color: "#bd8a1f",
    },
    image: {
        height: '75px',
        width: "90px",
        marginLeft: "3%",
        padding: "0.2%"
    }
})

// const font = 'Barlow, Playfair Display';

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: font,
//   },
// })

function NavBar() {
    const styles = useStyles();
    return (
        // <div>
            <div className={styles.navStyle}>
                <Navbar collapseOnSelect expand="lg" >
                <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fixed ="true"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: "3%"}} />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{marginLeft: "5%", marginRight: "5%"}}>
                    <Nav className="mr-auto" >
                        <Nav.Link style={{color: "white", marginRight: "2%", fontSize:"16px"}} href="/">Home</Nav.Link>
                        <Nav.Link style={{color: "white", marginRight: "2%", fontSize:"16px"}} href="/beer">Beer</Nav.Link>
                        <Nav.Link style={{color: "white", marginRight: "2%", fontSize:"16px"}} href="/about">About</Nav.Link>
                        <Nav.Link style={{color: "white", marginRight: "2%", fontSize:"16px"}} href="/contact">Contact</Nav.Link>
                        <Nav.Link style={{color: "white", marginRight: "2%", fontSize:"16px"}} href="/visit">Visit</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                    {/* <button style={{marginRight: "4%"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul style={{marginRight: "4%"}} className="navbar-nav nav-fill">
                            <li style={{marginRight: "2%"}} className="nav-item">
                                <Link style={{color:"white", fontSize:"16px"}} className="nav-link" to="/"> Home </Link>
                            </li>
                            <li style={{marginRight: "2%"}} className="nav-item">
                                <Link style={{color:"white", fontSize:"16px"}} className="nav-link" to="/beer"> Beer </Link>
                            </li>
                            <li style={{marginRight: "2%"}} className="nav-item">
                                <Link style={{color:"white", fontSize:"16px"}} className="nav-link" to="/about"> About</Link>
                            </li>
                            <li style={{marginRight: "2%"}} className="nav-item">
                                <Link style={{color:"white", fontSize:"16px"}} className="nav-link" to="/contact"> Contact </Link>
                            </li>
                            <li style={{marginRight: "2%"}} className="nav-item">
                                <Link style={{color:"white", fontSize:"16px"}} className="nav-link" to="/visit"> Visit </Link>
                            </li> */}
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
                        {/* </ul>
                    </div> */}
                </Navbar>
            </div>
        // </div>
    )
}

export default NavBar;