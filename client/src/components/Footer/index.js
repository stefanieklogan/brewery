import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Logo from "../../assets/Celebration_LogoBLACK.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Grid, Container } from '@material-ui/core';
import Image from 'react-bootstrap/Image';


const useStyles = makeStyles({
    root: {
        marginTop: "80px",
        marginBottom: "80px",
        backgroundColor: "#f4eee3"
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
        marginTop: "30px",
        fontFamily: "Red Hat Display",
        fontSize: "18px"
    },
    number: {
        textAlign: "center",
        marginTop: "20px",
        fontFamily: "Red Hat Display",
        fontSize: "18px"
    },
    hours: {
        textAlign: "center",
        marginTop: "10px",
        fontFamily: "Red Hat Display",
        fontSize: "18px"
    },
})

function Footer() {
    const styles = useStyles();
    return (
        <Grid style={{ backgroundColor: "#f4eee3" }}>
            <div className={styles.root}>
                <Container fluid="true">
                    <Row>
                        <Col style={{
                            justify: "center",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Row>
                                <Typography className={styles.para} component="p" variant="inherit">
                                    1617 Future Way
                                <br />
                                Celebration, Florida 34747
                        </Typography>
                            </Row>

                            <Row>
                                <Typography className={styles.number} component="p" variant="inherit">
                                    (333) 333-3333
                        </Typography>
                            </Row>

                        </Col>

                        <Col style={{
                            width: "25%", height: "25%",
                            justify: "center",
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <div >
                                <Image style={{ width: "150px", justifyContent: "center", alignItems: "center" }} src={Logo} alt="Celebration Brewing Logo" fluid />
                            </div>
                        </Col>

                        <Col style={{
                            justify: "center",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Row>
                                <Typography className={styles.para} component="p" variant="inherit">
                                    HOURS
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
                    </Row>
                </Container>
            </div>
        </Grid>

    )
}

export default Footer;


