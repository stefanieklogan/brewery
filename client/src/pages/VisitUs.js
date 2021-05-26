import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../components/Footer/';
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
        color: "black",
        textAlign: "center",
        marginTop: "60px",
        marginBottom: "10px",
    },
    para: {
        textAlign: "center",
        marginTop: "30px",
        // paddingRight: "100px",
        // paddingLeft: "100px",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "225px",
        width: "275px",
        // marginTop: "5%",
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
        marginTop: "1%",
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
        <div style={{backgroundColor: "#f4eee3"}}>
        <Container fluid style={{marginBottom: "10%"}}>
                <div style={{height: "100%", width: "100%", marginTop: "2%"}}>
            <Image fade="true" src={visitImage} alt="Celebration Brewing Logo" fluid />
                </div>
        </Container>
        <Container>
            <Row>
                <Col xs={6} sm={4} style={{ border: "solid", borderColor: "#c89019", padding: "2%", marginTop: "5%", alignItems: "center", justifyContent: "center", justify: "center", display: "flex"}}>
                    <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fluid />
                    <Typography className={styles.titleStyle} component="h4" variant="h4">
                        LOCATION
                    </Typography>
                    <Typography className={styles.para} component="p" variant="inherit">
                        1617 Future Way
                    </Typography>
                    <Typography style={{textAlign: "center"}} component="p" variant="inherit">
                        Celebration, Florida                            
                    </Typography>
                <Col/>

                <Col sm={4} style={{backgroundColor: "black", marginTop: "5%"}}>
                <Container style={{border: "solid", borderColor: "#c89019", padding: "5%", marginTop: "3%"}}>
                    <Typography className={styles.hourTitle} variant="inherit">
                        HOURS
                    </Typography>
                    <div container justify="center" style={{marginBottom: "3%"}}>
                        <hr style={{width: "40%", height: "2px", color: "#c89019", opacity: 0.7}} />
                    </div>                        
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
                </Container>
                </Col>

                <Col sm={4} style={{ alignItems: "center", justifyContent: "center", justify: "center", display: "flex"}}>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28102.35909696965!2d-81.56934498256605!3d28.304536877601265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1617%20Future%20Way%2C%20Celebration%20FL!5e0!3m2!1sen!2sus!4v1621821478802!5m2!1sen!2sus" width="450" height="600" style={{border:0, marginTop: "10%"}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </Col>
                </Col>
            </Row>
            
        </Container>
            
            {/* < Footer /> */}
            < Copyright />
        </div>
    )
};

export default VisitUs;