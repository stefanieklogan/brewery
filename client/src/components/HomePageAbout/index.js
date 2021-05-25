import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Container } from '@material-ui/core';
import Logo from "../../assets/Celebration_Logo.png";
import BeerCan1 from "../../assets/beer-can1.jpg";
import BeerCan2 from "../../assets/beer-can2.jpg";
import BeerCan3 from "../../assets/beer-can3.jpg";
import BeerCan4 from "../../assets/beer-can4.jpg";
import Image from 'react-bootstrap/Image';
import Footer from '../../components/Footer/';
import Copyright from '../../components/Copyright/';

// import MailchimpForm from '../Mailchimp/';


// import beerImage from "../../assets/brewery.jpg";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
    },
    titleStyle: {
        backgroundColor: "black",
        color: "#c89019",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "10px",
        fontFamily: "Barlow",
        fontWeight: 400,
        fontSize: "64px"
    },
    para: {
        textAlign: "center",
        marginTop: "30px",
        paddingRight: "100px",
        paddingLeft: "100px",
        fontFamily: "Red Hat Display",
        lineSpacing: "0.2px",
        letterSpacing: "0.2px",
        fontSize: "21px",
        fontWeight: 300,
        color: "white"
    },
    image: {
        height: "25%",
        width: "25%",
        paddingTop: "4%",
    },
    beerImage: {
        height: "100%",
        width: "100%",
        // display: "flex",
        padding: "2%",
        marginBottom: "2%"
    },
    button: {
        fontFamily: "Barlow",
        fontSize: "18px",
        color: "white",
        backgroundColor: "#c89019",
        marginBottom: "40px"
    }
}));

function HomePageAbout() {
    const styles = useStyles();
    return (
        <Grid style={{backgroundColor: "#f4eee3"}}>
            <Container style={{alignItems:"center", justifyContent: "center", display: "flex" }}>
                <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fluid />
            </Container>
            <Container style={{backgroundColor: "black", marginTop: "5%", display: "fluid"}}>
            <Typography fade styles={{marginTop: "20px"}} className={styles.titleStyle} component="h3" variant="h3">
                CELEBRATION'S FAVORITE BREWERY
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
            <Grid container direction="row" spacing={1} style={{ width: "100%", alignItems: "center", marginTop: "40px"}} justify="center">
                <Button className={styles.button} variant="outlined" href="/visit"> Visit Us </Button>
            </Grid>
            </Container>
            <Container style={{ marginTop: "3%", textAlign: "center", padding: "2%"}}>
                    <Typography style={{marginTop: "1%", marginBottom: "1%", fontFamily: "Barlow"}} component="h4" variant="h4">
                        BREAKING GROUND <span style={{color: "#c89019"}}> | </span> SUMMER 2021
                    </Typography>
                    <Grid container justify="center">
                        <hr style={{width: "50%", height: "5px", color: "#c89019", opacity: 0.7}} />
                    </Grid>
                    <Typography style={{ marginTop: "1%", fontFamily: "Barlow"}} component="h4" variant="h4">
                        OPENING <span style={{color: "#c89019"}}> | </span> WINTER 2022
                    </Typography>
                </Container>
            <Container style={{backgroundColor:"black", marginTop:"5%", display:"fluid"}}>
                <Typography style={{color:"#c89019", textAlign:"center", padding:"3%", fontFamily: "Barlow", fontSize: "64px"}} component="h3" variant="h3">
                    FEATURED BEERS
            </Typography>
                <Container >
                    <Grid container direction="row" style={{ alignItems:"center", justifyContent: "center", display: "flex", justify: "center"}}>
                    <div className="content_img">
                    <Image className={styles.beerImage} src={BeerCan1} alt="Picture of a can of beer" fluid />
                    <div>Octopuss Ale</div>
                    </div>
                    <div className="content_img">
                    <Image className={styles.beerImage} src={BeerCan2} alt="Picture of a can of beer" fluid />
                    <div>Growers</div>
                    </div>
                    <div className="content_img">
                    <Image className={styles.beerImage} src={BeerCan3} alt="Picture of a can of beer" fluid />
                    <div>Mango Cart</div>
                    </div>
                    <div className="content_img">
                    <Image className={styles.beerImage} src={BeerCan4} alt="Picture of a can of beer" fluid />
                    <div>Tahoma</div>
                    </div>
                    </Grid>
                </Container>
            
                {/* <Grid container direction="row" spacing={1} style={{ width: "100%", alignItems: "center", marginTop: "40px"}} justify="center">
                    <Button variant="outlined" href="#"> View All Beers </Button>
                </Grid> */}
            </Container>
            {/* <MailchimpForm /> */}
            <Footer />
            <Copyright />

        </Grid>
    )
};


export default HomePageAbout;