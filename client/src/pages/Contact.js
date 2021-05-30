import React from 'react';
import { Typography, Container } from '@material-ui/core';
// import { sizing } from '@material-ui/system';
import FeedbackForm from '../components/FeedbackForm/';
import MailchimpForm from '../components/Mailchimp/';
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
        paddingRight: "10%",
        paddingLeft: "10%",
        fontFamily: "Red Hat Display",
        lineSpacing: "0.2px",
        fontSize: "21px",
        fontWeight: 300,
    },
    paraTwo: {
        color: "white",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "75px",
        paddingRight: "10%",
        paddingLeft: "10%",
        fontFamily: "Red Hat Display", 
        fontSize: "18px", 
        fontWeight: 300, 
        letterSpacing: ".6px"
    },
    title: {
        color: "black",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "10px",
    },
    h4:{
        textAlign: "center",
        color: "white",
        fontFamily: "Barlow",
        fontSize: "36px"
    },
    bodyColor: {
        backgroundColor: "#efe9dd",
    },
    image: {
        height: "100%",
        maxWidth: "100%",
        // marginTop: "2%",
        display: "flex",
        // justifyContent: "center",
        // flexWrap: "wrap",
    }
});

function Contact() {
    const styles = useStyles();


    return (
        <div style={{backgroundColor: "#f4eee3"}}>
        <Container fluid="true" style={{backgroundColor: "#f4eee3"}}>
                <div fluid className={styles.image}>
                    <Image src={Beer} alt="Pouring beer" fluid/>
                </div>
                <Typography className={styles.para} component="p" variant="h6">
                Located less than five miles from the Walt Disney World&reg; Resort, Celebration Brewing is the best brewery in town. We offer brewery tours so that guests can learn about how we produce our beers, etc.
                </Typography>
            <Container style={{backgroundColor:"black", padding: "2em"}}>
            <Typography className={styles.h4} component="h4" variant="h4">
            &#10000; SHARE FEEDBACK &#10000;
                </Typography>
                <Typography className={styles.paraTwo} component="p" variant="inherit"> We value your input and feedback. We also value your privacy and will only contact you if agree. Thank you!
                </Typography>
            
            <FeedbackForm />
            </Container>
            
            <MailchimpForm />
        </Container>
        <Footer />
        <Copyright />

        </div>
    );

}

export default Contact;
