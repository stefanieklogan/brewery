import React from 'react';
import { Typography, Container, Grid, Box, Paper } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import FeedbackForm from '../components/FeedbackForm/';
import Footer from '../components/Footer/';
import Copyright from '../components/Copyright/';
import Image from 'react-bootstrap/Image';
import Beer from "../assets/pour-beer.jpg";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    para: {
        textAlign: "center",
        marginTop: "30px",
        marginBottom: "70px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    title: {
        backgroundColor: "white",
        color: "#c89019",
        textAlign: "center",
        marginTop: "80px",
        marginBottom: "10px",
    },
    bodyColor: {
        backgroundColor: "#efe9dd",
    },
    image: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "50px",
    }
})

function Contact() {
    const styles = useStyles();

    return (
        <Grid>
        <Container>
            <Box width={1}>
                <div className={styles.image}>
                    <Image src={Beer} alt="Pouring beer" fluid />
                </div>
            </Box>
            <Typography className={styles.title} component="h3" variant="h3">
            CONTACT US
            </Typography>
            <Typography className={styles.para} component="p" variant="p">
            Located in the Celebration area of Orlando, Celebration Brewing is the best brewery in town. We offer brewery tours so that guests can learn about how we produce out beers,etc.
            </Typography>
            <FeedbackForm />
        </Container>
        <Footer />
        <Copyright />
        </Grid>
    );

}

export default Contact
