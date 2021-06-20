import React from 'react';
// import "./style.css";
import EventCard from '../components/EventCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Footer from '../components/Footer/';
import Copyright from '../components/Copyright/';


function pxToRem(value) {
    return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});


const useStyles = makeStyles({
    heading: {
        color: "white",
        textAlign: "center",
        marginTop: "10rem",
        fontFamily: "Barlow",
        textTransform: "uppercase",
        wordSpacing: "0.7rem",
        letterSpacing: "0.1rem",
        position: "relative",
        textAlign: "center",
        fontSize: pxToRem(52),
        [breakpoints.up("md")]: {
            fontSize: pxToRem(64)
        }
    },

})


const BreweryEvents = [
    {
        image: "https://source.unsplash.com/taZldX9vnwk",
        title: "Drag Bingo",
        description: "Life can be a drag but bingo never is at Celebration Brewery",
        date: "Join us every Sunday at 11 AM for bingo with our brauwds",
    },
    {
        image: "https://source.unsplash.com/a19U7mqK6OI",
        title: "Hospitality Night",
        description: "We're giving back to the hardest working industry we know - hospitality. With a valid company ID, enjoy 15% off your bar tab",
        date: "Discount can be applied every Wednesday night from 5PM until closing",
    },
    {
        image: "https://source.unsplash.com/9RLk3ZpulUk",
        title: "Trivia",
        description: "Bring a friend, bring a crowd - join us for team trivia on Thursdays. No registration necessary",
        date: "Every Thursday from 7-9 PM",
    },
]


function Events() {
    const classes = useStyles();

    return (
        <Grid style={{ backgroundColor: "#f4eee3" }}>
            <Grid fluid="true" container style={{ alignItems: "center", justifyContent: "center", justify: "center", display: "flex", backgroundColor: "black" }}>
                <div style={{ backgroundImage: 'url("https://source.unsplash.com/vI7pDreQLl4")', backgroundSize: "cover", backgroundPosition: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "50vh", marginBottom: "3rem" }}>
                    <h2 className={classes.heading}> Events </h2>
                </div>
                <div>
                    <div className="row">
                        {BreweryEvents.map((item) => (
                            <Grid>
                                <EventCard project={item} />
                            </Grid>
                        ))}
                    </div>
                </div>
            </Grid>
            <Footer />
            <Copyright />
        </Grid>

    )
}

export default Events
