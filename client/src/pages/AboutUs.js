import React from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Logo from "../assets/Celebration_Logo.png";
import BeerPhoto from "../assets/about-celebration.png";
import Gif from "../assets/gif2.gif";
// import BeerGlass from "../assets/beer-glass";
// import beerImage from "../../assets/brewery.jpg";
// import Row from "react-bootstrap/Row";
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
root: {
    "& > *": {
    margin: theme.spacing(1),
    textAlign: "center",
    },
},
heading: {
    fontFamily: "Barlow",
    fontWeight: 300,
    fontSize: "24px",
    },
accordianPara: {
    fontFamily: "Red Hat Display",
    fontWeight: 300,
    fontSize: "20px",
},
titleStyle: {
    // backgroundColor: "white",
    color: "#c89019",
    textAlign: "center",
    // postition: "absolute",
    marginTop: "70px",
    bottom: "80px",
    right: "50px",
},
para: {
    textAlign: "center",
    marginTop: "30px",
    paddingRight: "15%",
    paddingLeft: "15%",
    fontFamily: "Red Hat Display",
    lineSpacing: "0.2px",
    fontSize: "21px"
},
button: {
    justifyContent: "center",
    alignItems: "center",
},
image: {
    height: "100%",
    width: "100%",
    marginTop: "2%",
},
beerImage: {
    height: "350px",
},
}));

function AboutUs() {
const styles = useStyles();
return (
  <div>
    <Grid>
      <div className={styles.image}>
        <Image fade src={BeerPhoto} alt="Celebration Brewing Logo" fluid />
      </div>
      {/* <Typography className={styles.titleStyle} component="h3" variant="h3">
                About Celebration Brewing
            </Typography> */}

      <Typography className={styles.para} component="p" variant="inherit">
        Frank L began dreaming of his vision for Celebration Brewing while
        homebrewing right here in Main Village, Celebration. Brewing a keg here,
        pouring a pint there, Frank easily made friends. As a resident
        for over 15 years, Frank saw the need for creating community for those
        who enjoy good beer and good company. Fast forward to today where he’s
        turning his dream into a reality.
        <br />
        <br />
        At Celebration Brewing we’re here to serve our community one pint at a
        time. Our beers are crafted to bring our community together. Whether you
        call Celebration home or just come to visit - stop by and taste what’s
        on tap.
        <br />
        <br />
        Life’s short. Love what you do, do what you love. #CelebrationBrewing
    </Typography>
    {/* <Grid
        container
        direction="row"
        spacing={1}
        style={{ width: "100%", alignItems: "center", marginTop: "40px" }}
        justify="center"
    >
    </Grid> */}
    <Grid container justify="center">
    <div style={{width: "80%", textAlign: "left", padding: "2%", alignItems: "center"}}>
        <Accordion style={{marginBottom: "1%", backgroundColor: "white", color: "black"}}>
            <AccordionSummary style={{backgroundColor: "black", color: "white"}}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={styles.heading}>What made you decide to open up a brewery here in Celebration?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={styles.accordianPara}>
                    I looked at a lot of places and I scouted many established breweries downtown Orlando and something kept drawing me back to Celebration. There are many great food & drink options in downtown Celebration but not for the beer fans out there. 
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{marginBottom: "1%", backgroundColor: "white", color: "black"}}>
            <AccordionSummary style={{backgroundColor: "black", color: "white"}}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={styles.heading}>What have you enjoyed most about the process?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={styles.accordianPara}>
                    I've enjoyed the partnership and business assistance I've had so far. Many residents in town have given me recommendations or they know a guy who can help out. It's a lot to start a brewery literal dirt to just before opening here soon.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{marginBottom: "1%", backgroundColor: "white", color: "black"}}>
            <AccordionSummary style={{backgroundColor: "black", color: "white"}}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Typography className={styles.heading}>Will you be offering a Celebration resident discount?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Yes, we're offering 10% discount with valid Celebration ID.
                <Typography className={styles.accordianPara}>
                    I;ve got several resident-focused events inthe works for 2023 where I hope residents and community members come to enjoy time here. that's when we'll say thank you for their on-going support.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{marginBottom: "1%", backgroundColor: "white", color: "black"}}>
            <AccordionSummary style={{backgroundColor: "black", color: "white"}}
            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
            aria-controls="panel4a-content"
            id="panel4a-header"
            >
            <Typography className={styles.heading}>What types of beer will you be known for?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={styles.accordianPara}>
                    We have a range - stout, IPA, ale and lager just to name a few. I'd like to think we'll be known for unique tastes and names. Spring Park Stout, Celebration Storm IPA and Lakeside Lager are just a few beer names inspired by the great community we operate from. 
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
    </Grid>
    <Grid>
    <Container style={{ marginTop: "4%", marginBottom: "4%", textAlign: "center", padding: "2%"}}>
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
    {/* <Container fluid="true" style={{display:"flex", justifyContent: "center", alignItems: "center" }}>
        <Image styles={{width:"100%", height:"100%"}} src={Gif}/>
    </Container> */}
    </Grid>

    {/* <Container style={{ marginTop: "3%", textAlign: "center", padding: "2%", border: "solid 1px", borderRadius: "8px"}}>
        <Typography style={{marginTop: "1%", marginBottom: "2%"}} component="h4" variant="h4">
            BREAKING GROUND <span style={{color: "#c89019"}}> | </span> SUMMER 2021
        </Typography>
        <Typography component="h4" variant="h4">
            OPENING <span style={{color: "#c89019"}}> | </span> WINTER 2022
        </Typography>
    </Container>                         */}
    <Footer />
    <Copyright />
    </Grid>
</div>
);
}

export default AboutUs;
