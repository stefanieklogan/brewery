import React from 'react';
import { Typography, Container } from '@material-ui/core';
import FeedbackForm from '../components/FeedbackForm/';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    icons: {
        marginRight: "25px",
        marginLeft: "25px",
        color: "black",
        '&:hover': {
            color: "#c89019",
        }
    },
    para: {
        textAlign: "center",
        marginTop: "30px",
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
        height: "800px",
        width: "1000px",
        paddingTop: "100px",
    }
})

function Contact() {
    const styles = useStyles();

    return (
        <Container>
        <div>
            <Typography className={styles.title} component="h4" variant="h4">
            Contact Us
            </Typography>
            <Typography className={styles.para} component="p" variant="p">
            Located in the Celebration area of Orlando, Celebration Brewing is the best brewery in town. We offer brewery tours so that guests can learn about how we produce out beers,etc.
            </Typography>
        </div>
        
        <div>
            <FeedbackForm />
        </div>
        </Container>
    
    );

}

export default Contact
