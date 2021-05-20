import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import Footer from '../../components/Footer/';
import Copyright from '../../components/Copyright/';
//     CardActions removed from line 5 after typography
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 100,
    },
    title: {
        textAlign: "center",
        marginTop: "70px",
        marginBottom: "50px"
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
        <main>
            <Typography className={classes.title} component="h3" variant="h3">
                BEERS ON TAP
            </Typography>
            <Grid container spacing={3}>
                {beers.map((beer) => (
                    <Grid key={beer.beer.beer_name} item xs={6}>
                        <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {beer.beer.beer_name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {beer.beer.beer_description}
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={beer.beer.beer_label}
                                alt={beer.beer.beer_name}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
            <Copyright />
        </main>
    )
}

export default Beer;
