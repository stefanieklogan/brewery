import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Copyright from '../components/Copyright/';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/Celebration_Logo.png"
import visitImage from "../assets/visit-celebration.png";
import { Grid } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer/';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

function pxToRem(value) {
    return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
    },
    titleStyle: {
        color: "white",
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px",
        fontFamily: "Barlow",
        // fontSize: "36px"
        fontSize: pxToRem(28),
        [breakpoints.up("md")]: {
            fontSize: pxToRem(36)
        }
    },
    para: {
        color: "white",
        textAlign: "center",
        marginTop: "10px",
        fontFamily: "Red Hat Display",
        fontSize: "20px",
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
    tel: {
        color: "white",
        textAlign: "center",
        marginTop: "10px",
        fontFamily: "Red Hat Display",
        fontSize: "20px",
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
        fontFamily: "Red Hat Display",
        fontSize: "20px",
        marginBottom: "4%",
    },
    hourTitle: {
        fontSize: "36px",
        fontFamily: "Barlow",
        color: "white",
        textAlign: "center",
        marginTop: "6%",
        marginBottom: "4%",
    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
        justify: "center",
        display: "flex",
        height: "100%",
        width: "50%"
    }
}));

function VisitUs() {
    const styles = useStyles();
    return (

        <div style={{ backgroundColor: "#f4eee3" }}>
            <Container fluid="true" style={{ marginBottom: "10%" }}>
                <div style={{ height: "100%", width: "100%" }}>
                    <Image src={visitImage} alt="Photo of beer with Visit Us text" fluid />
                </div>
                <Row style={{ border: "solid", borderColor: "#c89019", padding: "3%", marginTop: "3%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28102.35909696965!2d-81.56934498256605!3d28.304536877601265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1617%20Future%20Way%2C%20Celebration%20FL!5e0!3m2!1sen!2sus!4v1621821478802!5m2!1sen!2sus"
                        width="100%" height="400px" style={{ border: 0 }} allowFullScreen="true" loading="lazy" title="celebration brewery on google maps"></iframe>
                </Row>
            </Container>
            <Footer />
            < Copyright />
        </div>
    )
};

export default VisitUs;