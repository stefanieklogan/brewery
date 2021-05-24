import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
// import { sizing } from '@material-ui/system';
import FeedbackForm from '../components/FeedbackForm/';
import Footer from '../components/Footer/';
import Copyright from '../components/Copyright/';
import Image from 'react-bootstrap/Image';
import Beer from "../assets/contact-celebration.png";
import { makeStyles } from "@material-ui/core/styles";
// import { Transition } from 'react-transition-group';


const useStyles = makeStyles({
    para: {
        color: "black",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px",
        paddingRight: "20%",
        paddingLeft: "20%",
    },
    paraTwo: {
        color: "white",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px",
        paddingRight: "10%",
        paddingLeft: "10%",
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
        // display: "flex",
        // justifyContent: "center",
        flexWrap: "wrap",
        // marginTop: "50px",
    }
});

function Contact() {
    const styles = useStyles();


    return (
        <Grid>
        <Container>
                <div className={styles.image}>
                    <Image src={Beer} alt="Pouring beer" fluid/>
                </div>
            {/* <Typography className={styles.title} component="h3" variant="h3">
                CONTACT US
                </Typography> */}
                {/* <Zoom { ...documentOptions}>   */}
                <Container style={{ marginTop: "3%", textAlign: "center", padding: "2%"}}>
                    <Typography style={{marginTop: "1%", marginBottom: "1%"}} component="h4" variant="h4">
                        BREAKING GROUND <span style={{color: "#c89019"}}> | </span> SUMMER 2021
                    </Typography>
                    <Grid container justify="center">
                        <hr style={{width: "50%", height: "5px", color: "#c89019", opacity: 0.7}} />
                    </Grid>
                    <Typography style={{ marginTop: "1%"}} component="h4" variant="h4">
                        OPENING <span style={{color: "#c89019"}}> | </span> WINTER 2022
                    </Typography>
                </Container>
                
                {/* </Zoom > */}
                <Typography className={styles.para} component="p" variant="h6">
                Located in the Celebration area of Orlando, Celebration Brewing is the best brewery in town. We offer brewery tours so that guests can learn about how we produce out beers,etc.
                </Typography>
            <Container style={{backgroundColor:"black", padding: "2em"}}>
            <Typography className={styles.h4} component="h4" variant="h4">
                Share Feedback
                </Typography>
                <Typography className={styles.paraTwo} component="p" variant="inherit"> We value your input and feedback. Please fill out the form below and we will get in touch as soon as possible. Thank you!
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
