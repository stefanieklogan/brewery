import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import Footer from '../../components/Footer/';
import Copyright from '../../components/Copyright/';
//     CardActions removed from line 5 after typography
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
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
        // marginTop: "2%",
        // marginBottom: "2%"
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

        <Grid style={{ backgroundColor: "#f4eee3" }}>
            <Grid container fluid="true" style={{ display: "flex" }}>
                <div>
                    <Image className={classes.image} src={BeerImg} alt="Picture of a can of beer" />
                </div>
            </Grid>

            <Grid container style={{ alignItems: "center", justifyContent: "center", backgroundColor: "black" }}>
                {beers.map((beer) => (
                    <Grid key={beer.beer.beer_name} style={{ height: "300px", width: "600px" }}>
                        <Card className={classes.root}>
                            <CardActionArea style={{ justifyContent: "left", alignItems: "left", backgroundColor: "black" }}>

                                <CardContent>
                                    <Typography style={{ textAlign: "center", padding: "2%", fontFamily: "Playfair Display", color: "white" }} component="h4" variant="h4">
                                        {beer.beer.beer_name}
                                    </Typography>
                                    <div style={{justify:"center", justifyContent: "center", alignItems: "center", display: "flex"}}>
                                        <hr style={{ width: "40%", height: "2px", color: "#c89019", opacity: 0.7 }} />
                                    </div>
                                    <Typography style={{ textAlign: "center", padding: "2%", fontFamily: "Playfair Display", color: "white", fontSize: "21px" }} component="h4" variant="h4">
                                        {beer.beer.beer_style} <span style={{ color: "#cd8f2a" }}> | </span> {beer.beer.beer_abv}%
                                    </Typography>
                                    <Typography style={{ padding: "5%", textAlign: "center", fontFamily: "Barlow", fontSize: "18px", fontWeight: 300, color: "white" }} variant="subtitle1">
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
