import React from 'react';
// import './style.css';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Logo from "../../assets/Celebration_LogoBLACK.png";
// import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from '@material-ui/core/Container';
import Image from 'react-bootstrap/Image';
// import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: "80px",
        marginBottom: "80px",
    },
    navStyle: {
        backgroundColor: "#efe9dd",
    },
    titleStyle: {
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
    },
    para: {
        textAlign: "center",
        marginTop: "50px",
        // paddingRight: "100px",
        // paddingLeft: "100px",
    },
    number: {
        textAlign: "center",
        marginTop: "20px",
    },
    hours: {
        textAlign: "center",
        marginTop: "10px",
    },
    link: {
        textAlign: "center",
        marginTop: "30px",
        color: "black",
        textDecoration: "none",
    }
})

function Footer() {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Typography className={styles.para} component="p" variant="inherit">
                                1234 Disney World Dr.
                                Orlando, Florida 33333
                        </Typography>
                        </Row>
                        <Row>
                            <Typography className={styles.number} component="p" variant="inherit">
                                (333) 333-3333
                        </Typography>
                        </Row>
                        <Row>
                            <Typography className={styles.para} component="p" variant="inherit">
                                Hours:
                        </Typography>
                        </Row>
                        <Row>
                            <Typography className={styles.hours} component="p" variant="inherit">
                                M-F 10:00am - 7:00pm
                        </Typography>
                        </Row>
                        <Row>
                            <Typography className={styles.hours} component="p" variant="inherit">
                                Sat &amp; Sun 10:00am - 12:00am
                        </Typography>
                        </Row>
                    </Col>
                    <Col>
                        <div className={styles.beerImage}>
                            <Image src={Logo} alt="Celebration Brewing Logo" fluid />
                        </div>
                    </Col>
                    <Col>
                        <Typography className={styles.titleStyle} component="h4" variant="h4">
                            Explore
                    </Typography>
                        <Typography className={styles.link} component="p" variant="inherit">
                            <Link className="nav-link" to="/"> Home </Link>
                            <Link className="nav-link" to="/about"> About</Link>
                            <Link className="nav-link" to="/beer"> Beer </Link>
                            <Link className="nav-link" to="/visit"> Visit</Link>
                            <Link className="nav-link" to="/contact"> Contact
                            </Link>
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Footer;