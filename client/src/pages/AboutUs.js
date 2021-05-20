import React from 'react';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Logo from "../assets/Celebration_Logo.png";
// import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
    },
    titleStyle: {
        backgroundColor: "white",
        color: "#c89019",
        textAlign: "center",
        marginTop: "80px",
        marginBottom: "10px",
    },
    para: {
        textAlign: "center",
        marginTop: "30px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "350px",
        width: "350px",
        paddingTop: "100px",
    },
    beerImage: {
        height: "350px",

    }
}));

function AboutUs() {
    const styles = useStyles();
    return (
        <div>
            <Row className="justify-content-md-center">
                <div className={styles.image}>
                    <Image src={Logo} alt="Celebration Brewing Logo" fluid />
                </div>
            </Row>
            <Typography className={styles.titleStyle} component="h3" variant="h3">
                About Celebration Brewing
            </Typography>
            <Typography className={styles.para} component="p" variant="inherit">
                Since 2021, Celebration Brewing Company has been committed to producing authentic and unique beers that push the boundaries of regular brewing styles and categories. We’re proud to serve our customers with only the best, continually crafting each taste until it’s exactly right.
            <br />
                <br />
            Celebration Brewing is a family-owned brewery, taproom, and kitchen located in beautiful Celebration, Florida. We focus on using only the best ingredients and delivering the utmost quality to our customers.
            <br />
                <br />
            Everyday, we’re driven by our core values: delivering quality flavors, honoring our customers and celebrating the culture of beer. Experience it for yourself by joining us for a brewery tour, a special event or just to try what’s on tap.
            </Typography>
            <div className={styles.root}>
                <Button variant="outlined" href="#"> Visit Us </Button>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
};

export default AboutUs