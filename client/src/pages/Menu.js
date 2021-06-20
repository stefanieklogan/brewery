import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuCard from "../components/MenuCard";
import Footer from '../components/Footer/';
import Copyright from '../components/Copyright/';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';


function pxToRem(value) {
    return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});

const useStyles = makeStyles({
    heading: {
        color: "white",
        marginTop: "10rem",
        fontFamily: "Barlow",
        textTransform: "uppercase",
        wordSpacing: "0.7rem",
        letterSpacing: "0.1rem",
        verticalAlign: "middle",
        fontSize: pxToRem(64),
        [breakpoints.up("md")]: {
            fontSize: pxToRem(72)
        }
    },

})

const MenuItems =
    [
        {
            "key": 1,
            "food": "Pretzels and beer cheese",
            "price": "$10",
            "description": "Handmade soft pretzels served with a side of beer cheese"
        },
        {
            "key": 2,
            "food": "Goat cheese & marinara",
            "price": "$12",
            "description": "Spread served with warm pita wedges"
        },
        {
            "key": 3,
            "food": "Chicken wings",
            "price": "$9",
            "description": "Tossed with ale and spices - Mi | Me | Ho"
        },
        {
            "key": 4,
            "food": "'96 Mini burgers",
            "price": "$12",
            "description": "Four sliders topped with grilled onions, mushrooms and swiss cheese"
        },
        {
            "key": 5,
            "food": "Chips and guac",
            "price": "$9",
            "description": "Corn tortilla chips with homemade guacamole"
        },
        {
            "key": 6,
            "food": "Fried mac & cheese bites",
            "price": "$10",
            "description": "Deep fried macaroni and cheese bites made with a blend of creamy cheeses "
        }
    ]

function Menu() {
    const classes = useStyles();

    return (
        <Grid style={{ backgroundColor: "#f4eee3" }}>
            <Grid container fluid="true" style={{ textAlign: "center", alignItems: "center", justifyContent: "center", justify: "center", display: "flex", backgroundColor: "black" }}>
                <div style={{ backgroundImage: 'url("https://source.unsplash.com/0r2FM2tsbeM")', backgroundSize: "cover", backgroundPosition: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "50vh" }}>
                    <h2 className={classes.heading}> Quick Bites </h2>
                </div>
                <div className="row">
                    {MenuItems.map((item) => (
                        <Grid>
                            <MenuCard project={item} />
                        </Grid>
                    ))}
                </div>
            </Grid>
            <Footer />
            <Copyright />
        </Grid>
    )
}

export default Menu