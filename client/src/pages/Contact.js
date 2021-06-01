import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
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
        paddingRight: "5%",
        paddingLeft: "5%",
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
    h4: {
        textAlign: "center",
        color: "white",
        fontFamily: "Barlow",
        fontSize: "36px"
    },
    bodyColor: {
        backgroundColor: "#efe9dd",
    },
});

function Contact() {
    const styles = useStyles();


    return (

        <div style={{backgroundColor: "#f4eee3"}}>
        <div style={{backgroundColor: "#f4eee3"}}>
            {/* <Grid fluid="true"> */}
                <div style={{ width: "100%", height: "100%" }}>
                    <Image src={Beer} alt="Beer photo with contact us text" fluid/>
                </div>
                {/* </Grid> */}
                <Grid>
                <Typography className={styles.para} component="p" variant="h6">
                    Located less than five miles from the Walt Disney World&reg; Resort, Celebration Brewing is the best brewery in town. We offer brewery tours so that guests can learn about how we produce our beers, etc.
                </Typography>
                <div style={{ backgroundColor: "black", padding: "2%" }}>
                    <Typography className={styles.h4} component="h4" variant="h4">
                        {/* &#10000; SHARE FEEDBACK &#10000; */}
                        SHARE FEEDBACK
                </Typography>
                    <Typography className={styles.paraTwo} component="p" variant="inherit"> We value your input and feedback. We also value your privacy and will only contact you if agree. Thank you!
                </Typography>
                    <FeedbackForm />
                </div>
                </Grid>
                    <MailchimpForm />
            </div>
            <Footer />
            <Copyright />

        </div>
    );

}

export default Contact;
