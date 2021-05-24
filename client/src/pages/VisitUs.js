import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../components/Footer/';
import Copyright from '../components/Copyright/';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/Celebration_Logo.png"
import visitImage from "../assets/visit-celebration.png";

import Map from "../assets/map.png";
// import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
    },
    titleStyle: {
        backgroundColor: "white",
        color: "black",
        textAlign: "left",
        marginTop: "80px",
        marginBottom: "10px",
    },
    para: {
        textAlign: "left",
        marginTop: "30px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "200px",
        width: "250px",
        marginTop: "100px",
    },
    link: {
        color: "black",
        textDecoration: "none",
    },
    mapImage: {
        height: "250px",
        marginTop: "100px",
        alignItems: "center"

    }
}));

function VisitUs() {
    const styles = useStyles();
    return (
        <div>
            <Container fluid style={{marginBottom: "10%"}}>
                <div style={{height: "100%", width: "100%"}}>
            <Image fade src={visitImage} alt="Celebration Brewing Logo" fluid />
                </div>
                <Row>
                    <Col sm={6}>
                        <div className={styles.beerImage}>
                            <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fluid />
                            <Typography className={styles.titleStyle} component="h3" variant="h3">
                                Contact Us
                    </Typography>
                            <Typography className={styles.titleStyle} component="h5" variant="h5">
                                VISIT CELEBRATION BREWING
                    </Typography>
                            <Typography className={styles.para} component="p" variant="inherit">
                                A blurb about taking a brewery tour at Celebration brewing.
                    </Typography>
                            <div className="justify-content-center">
                                <Link className="nav-link" to="/about"> PLAN YOUR VISIT</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28102.35909696965!2d-81.56934498256605!3d28.304536877601265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1617%20Future%20Way%2C%20Celebration%20FL!5e0!3m2!1sen!2sus!4v1621821478802!5m2!1sen!2sus" width="600" height="450" style={{border:0, marginTop: "5%"}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            < Footer />
            < Copyright />
        </div>
    )
};

export default VisitUs;