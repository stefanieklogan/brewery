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
        marginRight: "5%",
        marginLeft: "5%",
        marginBottom: "5%",
        marginTop: "5%"
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
        margin: "5%",
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

        {/* <Typography className={classes.title} component="h3" variant="h3">
            BEERS ON TAP
        </Typography> */}
        <Grid container style={{ alignItems:"center", justifyContent: "center", backgroundColor: "black" }}>
            {beers.map((beer) => (
            <Grid key={beer.beer.beer_name} item xs={6}>
            <Card className={classes.root}>
            <CardActionArea style={{justifyContent: "center", alignItems: "center"}}>
            <CardMedia
                component="img"
                className={classes.cover}
                image={beer.beer.beer_label}
                alt={beer.beer.beer_name}
                height="140"
            />
            <CardContent>
            <Typography style={{textAlign: "center", marginTop: "3%", padding: "5%"}} component="h4" variant="h4">
                {beer.beer.beer_name}
            </Typography>
            <Typography style={{padding: "10%", textAlign: "center"}} variant="subtitle1" color="textSecondary">
                {beer.beer.beer_description}
            </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
            ))}
        <Footer />
        <Copyright />
        </Grid>
        </Grid>
    )
}

export default Beer;
