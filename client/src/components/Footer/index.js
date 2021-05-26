import React from 'react';
// import './style.css';
// import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Logo from "../../assets/Celebration_LogoBLACK.png";
// import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Grid } from '@material-ui/core';
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
        marginTop: "50px",
        fontFamily: "Red Hat Display",
        fontSize: "18px"
        // paddingRight: "100px",
        // paddingLeft: "100px",
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
    // link: {
    //     textAlign: "center",
    //     marginTop: "30px",
    //     color: "black",
    //     textDecoration: "none",
    // }
})

function Footer() {
    const styles = useStyles();
    return (
        <Grid style={{backgroundColor: "#f4eee3"}}>
        <div className={styles.root}>
            <Container fluid="true">
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
                        
                    </Col>
                    
                    <Col style={{width:"25%", height:"25%", 
                    justify: "center",  
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                        <div >
                            <Image style={{width: "150px", justifyContent: "center", alignItems: "center"}} src={Logo} alt="Celebration Brewing Logo" fluid />
                        </div>
                    </Col>
                    
                        <Col>
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
                            Sat & Sun 10:00am - 12:00am
                        </Typography>
                        </Row>
                        </Col>
                </Row>
            </Container>
        </div>
        </Grid>

    )
}

export default Footer


