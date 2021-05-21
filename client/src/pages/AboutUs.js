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
// import { ImageList } from '@material-ui/core';
// import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center",
    },
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
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    // position: "relative",
    // paddingTop: "50px",
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
        <Image src={BeerPhoto} alt="Celebration Brewing Logo" fluid />
      </div>
      {/* <Typography className={styles.titleStyle} component="h3" variant="h3">
                About Celebration Brewing
            </Typography> */}

      <Typography className={styles.para} component="p" variant="inherit">
        Frank L began dreaming of his vision for Celebration Brewing while
        homebrewing right here in Main Village, Celebration. Brewing a keg here,
        pouring a pint there, it’s good to be friends with Frank! As a resident
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
    <Grid
        container
        direction="row"
        spacing={1}
        style={{ width: "100%", alignItems: "center", marginTop: "40px" }}
        justify="center"
    >
        <Button variant="outlined" href="#">
            Visit Us
        </Button>
    </Grid>
    <Grid>
    <Container fluid="true" style={{display:"flex", justifyContent: "center", alignItems: "center" }}>
        <Image styles={{width:"100%", height:"100%"}} src={Gif}/>
    </Container>
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
