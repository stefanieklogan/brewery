import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Container } from '@material-ui/core';
import Logo from "../../assets/Celebration_Logo.png";
import BeerCan1 from "../../assets/beer-can1.jpg";
import BeerCan2 from "../../assets/beer-can2.jpg";
import BeerCan3 from "../../assets/beer-can3.jpg";
import BeerCan4 from "../../assets/beer-can4.jpg";

// import beerImage from "../../assets/brewery.jpg";
// import Row from 'react-bootstrap/Row';
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
        // justifyContent: "center",
        // alignItems: "center",
    },
    image: {
        height: "25%",
        width: "25%",
        paddingTop: "100px",
    },
    beerImage: {
        height: "25%",
        width: "25%",
        display: "flex",
        padding: "2%",

    }
}));

function HomePageAbout() {
    const styles = useStyles();
    return (
        <Grid>
            <Container style={{alignItems:"center", justifyContent: "center", display: "flex" }}>
                <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fluid />
            </Container>
            <Typography className={styles.titleStyle} component="h3" variant="h3">
                ORLANDO'S FAVORITE BREWERY
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
                <Button className={styles.button} variant="outlined" href="#"> Visit Us </Button>
            </Grid>
            <Container style={{backgroundColor:"black", marginTop:"5%", display:"fluid"}}>
                <Typography style={{color:"white", textAlign:"center", padding:"5%"}} component="h3" variant="h3">
                    FEATURED BEERS
            </Typography>
                <Container>
                    <Grid container direction="row">
                    <Image className={styles.beerImage} src={BeerCan1} alt="Picture of a can of beer" fluid />
                    <Image className={styles.beerImage} src={BeerCan2} alt="Picture of a can of beer" fluid />
                    <Image className={styles.beerImage} src={BeerCan3} alt="Picture of a can of beer" fluid />
                    <Image className={styles.beerImage} src={BeerCan4} alt="Picture of a can of beer" fluid />
                    </Grid>
                </Container>
            
                <Grid container direction="row" spacing={1} style={{ width: "100%", alignItems: "center", marginTop: "40px"}} justify="center">
                    <Button variant="outlined" href="#"> View All Beers </Button>
                </Grid>
            </Container>
            {/* <Container fluid>
                <Row>
                    <Col>
                        <div className={styles.beerImage}>
                            <Image src={beerImage} alt="Celebration Brewing Logo" fluid />
                        </div>
                    </Col>
                    <Col>
                    <Typography className={styles.titleStyle} component="h3" variant="h3">
                            WHAT'S HAPPENING
                    </Typography>
                        <Typography className={styles.para} component="p" variant="inherit">
                            Discover all the latest events of festivals that are happening at Celebration Brewing or that Celebration Brewing will be a part of!
                    </Typography>
                        <div className="justify-content-center">
                            <Button variant="outlined" href="#"> View All Events </Button>
                        </div>
                    </Col>
                </Row>
            </Container> */}

        </Grid>
    )
};

// const itemData = [
//     {
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         title: 'Breakfast',
//         author: '@bkristastucchio',
//         rows: 2,
//         cols: 2,
//         featured: true,
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//         author: '@rollelflex_graphy726',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//         title: 'Camera',
//         author: '@helloimnik',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//         title: 'Coffee',
//         author: '@nolanissac',
//         cols: 2,
//     },
// ];

export default HomePageAbout;