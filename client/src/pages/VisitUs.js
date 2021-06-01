import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Copyright from '../components/Copyright/';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/Celebration_Logo.png"
import visitImage from "../assets/visit-celebration.png";
import { Grid } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                <Col sm={12}>
                    <Row style={{ border: "solid", borderColor: "#c89019", padding: "3%", marginTop: "3%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28102.35909696965!2d-81.56934498256605!3d28.304536877601265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1617%20Future%20Way%2C%20Celebration%20FL!5e0!3m2!1sen!2sus!4v1621821478802!5m2!1sen!2sus" width="100%" height="400px" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="celebration brewery on google maps"></iframe>
                        </div>
                    </Row>
                </Col>

                <Row style={{ backgroundColor: "black", marginTop: "2%", marginBottom: "2%" }}>

                    <Col sm={6} style={{ marginBottom: "2%" }}>
                        <Container>
                            <Row style={{ border: "solid", borderColor: "#c89019", padding: "5%", marginTop: "5%" }}>
                                <div style={{ alignItems: "center", justifyContent: "center", justify: "center", display: "flex" }}>
                                    <Image className={styles.logo} src={Logo} alt="Celebration Brewing Logo" fluid />
                                </div>
                                <Typography className={styles.titleStyle} component="h4" variant="h4">
                                    LOCATION
                            </Typography>
                                <Grid container justify="center" style={{ marginBottom: "3%" }}>
                                    <hr style={{ width: "40%", height: "2px", color: "#c89019", opacity: 0.7 }} />
                                </Grid>
                                <Typography className={styles.para}>
                                    1617 Future Way
                            </Typography>
                                <Typography className={styles.para}>
                                    Celebration, Florida 34747
                            </Typography>
                                <br />
                                <br />
                                <br />
                                <Typography className={styles.para}>
                                    (333)333-3333
                            </Typography>
                            </Row>
                        </Container>
                    </Col>


                    <Col sm={6}>
                        <Container>
                            <Row style={{ border: "solid", borderColor: "#c89019", padding: "5%", marginTop: "5%", marginBottom: "4%" }}>
                                <Typography className={styles.hourTitle} component="h5" variant="inherit">
                                    HOURS

                        </Typography>
                                <Grid container justify="center" style={{ marginBottom: "3%" }}>
                                    <hr style={{ width: "40%", height: "2px", color: "#c89019", opacity: 0.7 }} />
                                </Grid>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    <span style={{ marginRight: "6%" }}>Monday</span> 10am - 7pm
                                </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    <span style={{ marginRight: "6%" }}>Tuesday</span> 10am - 7pm
                                </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    <span style={{ marginRight: "6%" }}>Wednesday</span>10am - 7pm
                                </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    <span style={{ marginRight: "6%" }}>Thursday</span>10am - 7pm
                                </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    <span style={{ marginRight: "6%" }}>Friday</span>10am - 7pm
                                </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    <span style={{ marginRight: "6%" }}>Saturday</span>10am - 12pm
                                </Typography>
                                <Typography className={styles.hours} component="p" variant="inherit">
                                    <span style={{ marginRight: "6%" }}>Sunday</span>10am - 12am
                                </Typography>

                            </Row>
                        </Container>

                    </Col>
                </Row>

            </Container>
            < Copyright />
        </div>
    )
};

export default VisitUs;