import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import Footer from '../../components/Footer/';
import Copyright from '../../components/Copyright/';
//     CardActions removed from line 5 after typography
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import Image from 'react-bootstrap/Image';

import BeerImg from "../../assets/beer-celebration.png";

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // padding: '30px',
        marginRight: "3%",
        marginLeft: "3%",
        marginBottom: "3%",
        marginTop: "6%"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: 175,
        width: 150,
        margin: "3%",
        // align: "center",
        // justify: "center",
    },
    title: {
        textAlign: "center",
        marginTop: "70px",
        marginBottom: "50px"
    },
    image: {
        height: "100%",
        width: "100%",
        marginTop: "2%",
        marginBottom: "2%"
    }
}));

function Beer() {
    const classes = useStyles();

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    function loadBeers() {
        API.getBeers()
            .then(res =>
                setBeers(res.data)
            )
            .catch(err => console.log(err));
    };
    return (
        // <main>
        //     <Typography className={classes.title} component="h3" variant="h3">
        //         BEERS ON TAP
        //     </Typography>
        //     <Grid container spacing={3}>
        //         {beers.map((beer) => (
        //             <Grid key={beer.beer.beer_name} item xs={6}>
        //                 <Card className={classes.root}>
        //                     <CardActionArea>
        //                     <CardMedia
        //                         className={classes.cover}
        //                         image={beer.beer.beer_label}
        //                         alt={beer.beer.beer_name}
        //                     />
        //                     <div className={classes.details}>
        //                         <CardContent className={classes.content}>
        //                             <Typography component="h5" variant="h5">
        //                                 {beer.beer.beer_name}
        //                             </Typography>
        //                             <Typography variant="subtitle1" color="textSecondary">
        //                                 {beer.beer.beer_description}
        //                             </Typography>
        //                         </CardContent>
        //                         </div>
        //                         </CardActionArea>
                            
                            
        //                 </Card>
        //             </Grid>
        //         ))}
        //     </Grid>
        //     <Footer />
        //     <Copyright />
        // </main>
        <Grid>
            <Container fluid="true" styles={{display:"flex"}}>
                <Image className={classes.image} src={BeerImg} alt="Picture of a can of beer" />
            </Container>

        <Grid container style={{ alignItems:"center", justifyContent: "center", backgroundColor: "black" }}>
            {beers.map((beer) => (
            <Grid key={beer.beer.beer_name} style={{height: "250px", width: "600px"}}>
            <Card className={classes.root}>
            <CardActionArea style={{justifyContent: "left", alignItems: "left", backgroundColor: "black"}}>
            {/* <CardMedia
                component="img"
                className={classes.cover}
                image={beer.beer.beer_label}
                alt={beer.beer.beer_name}
                height="140"
            /> */}
            <CardContent>
            <Typography style={{textAlign: "left", padding: "2%", fontFamily: "Playfair Display", color: "white"}} component="h4" variant="h4">
                {beer.beer.beer_name}
            </Typography>
            <Typography style={{padding: "5%", textAlign: "left", fontFamily: "Barlow", fontWeight: 400, color: "white"}} variant="subtitle1" color="textSecondary">
                {beer.beer.beer_description}
            </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
            ))}
        </Grid>
        <Footer />
        <Copyright />
        </Grid>
    )
}

export default Beer;
