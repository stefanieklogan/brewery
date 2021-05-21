import React from 'react';
import { Typography, Container, Grid, Box } from '@material-ui/core';
// import { sizing } from '@material-ui/system';
import FeedbackForm from '../components/FeedbackForm/';
import Footer from '../components/Footer/';
import Copyright from '../components/Copyright/';
import Image from 'react-bootstrap/Image';
import Beer from "../assets/pour-beer.jpg";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    para: {
        color: "black",
        textAlign: "center",
        marginTop: "30px",
        marginBottom: "50px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    paraTwo: {
        color: "white",
        textAlign: "center",
        marginTop: "30px",
        marginBottom: "50px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    title: {
        color: "black",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "10px",
    },
    h4:{
        textAlign: "center",
        color: "white"
    },
    bodyColor: {
        backgroundColor: "#efe9dd",
    },
    image: {
        height: "100%",
        width: "100%",
        display: "flex",
        // justifyContent: "center",
        // flexWrap: "wrap",
        // marginTop: "50px",
    }
})

function Contact() {
    const styles = useStyles();

    return (
        <Grid>
        <Container>
                <div className={styles.image}>
                    <Image src={Beer} alt="Pouring beer" fluid/>
                </div>
            <Typography className={styles.title} component="h3" variant="h3">
                CONTACT US
                </Typography>
                <Typography className={styles.para} component="p" variant="h6">
                Located in the Celebration area of Orlando, Celebration Brewing is the best brewery in town. We offer brewery tours so that guests can learn about how we produce out beers,etc.
                </Typography>
            <Container style={{backgroundColor:"black", padding: "2em"}}>
            <Typography className={styles.h4} component="h4" variant="h4">
                Get in Touch
                </Typography>
                <Typography className={styles.paraTwo} component="p" variant="inherit"> We value your input and feedback! Please fill out the form below and we will get in touch as soon as possible! Thank you!
                </Typography>
            
            <FeedbackForm />
            </Container>
            
                
        </Container>
        <Footer />
        <Copyright />

        </Grid>
    );

}

export default Contact;
