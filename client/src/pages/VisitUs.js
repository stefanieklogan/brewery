import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import Footer from '../components/Footer/';
import Copyright from '../components/Copyright/';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/Celebration_Logo.png"
import visitImage from "../assets/visit-celebration.png";
import { Grid } from '@material-ui/core';
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
    },
    number: {
        textAlign: "left",
        color: "white",
        marginTop: "20px",
        fontFamily: "Red Hat Display",
        fontSize: "18px"
    },
    hours: {
        textAlign: "center",
        color: "white",
        marginTop: "10px",
        fontFamily: "Red Hat Display",
        fontSize: "18px",
        marginBottom: "4%",
        // marginRight: "5%"

    },
    hourTitle: {
        fontSize: "32px",
        fontFamily: "Barlow",
        color: "white",
        textAlign: "center",
        marginTop: "6%",
        marginBottom: "4%",
        // marginRight: "3%"
    }
}));

function VisitUs() {
    const styles = useStyles();
    return (
        <div>
            <Container fluid style={{ marginBottom: "10%" }}>
                <div style={{ height: "100%", width: "100%", marginTop: "2%" }}>
                    <Image fade="true" src={visitImage} alt="Celebration Brewing Logo" fluid />
                </div>
                <Row>
                    <Col sm={4}>
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
                    <Col sm={4} style={{ backgroundColor: "black", marginTop: "3%" }}>
                        <Container>
                            <Row style={{ border: "solid", borderColor: "#c89019", padding: "5%", marginTop: "5%" }}>
                                <Typography className={styles.hourTitle} variant="inherit">
                                    Hours:
                        </Typography>
                                <Grid container justify="center" style={{ marginBottom: "3%" }}>
                                    <hr style={{ width: "40%", height: "2px", color: "#c89019", opacity: 0.7 }} />
                                </Grid>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    Monday 10:00am - 7:00pm
                        </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    Tuesday 10:00am - 7:00pm
                        </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    Wednesday 10:00am - 7:00pm
                        </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    Thursday 10:00am - 7:00pm
                        </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    Friday 10:00am - 7:00pm
                        </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    Saturday 10:00am - 12:00pm
                        </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    Sunday 10:00am - 12:00am
                        </Typography>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={4}>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28102.35909696965!2d-81.56934498256605!3d28.304536877601265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1617%20Future%20Way%2C%20Celebration%20FL!5e0!3m2!1sen!2sus!4v1621821478802!5m2!1sen!2sus" title="map" width="600" height="450" style={{ border: 0, marginTop: "5%" }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* < Footer /> */}
            < Copyright />
        </div>
    )
};

export default VisitUs;