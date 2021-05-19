import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container';
import FeedbackForm from '../components/FeedbackForm/';

function Contact() {

    return (
        <Container>
        <div>
            <Typography component="h4" variant="h4">
            Contact Us
            </Typography>
            <Typography component="p" variant="p">
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
