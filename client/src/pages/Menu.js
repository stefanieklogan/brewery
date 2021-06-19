import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuCard from "../components/MenuCard";

const useStyles = makeStyles({
    heading: {
        color: "white",
        textAlign: "center",
        marginTop: "3rem",
        fontFamily: "Barlow",
        textTransform: "uppercase",
        wordSpacing: "0.7rem",
        letterSpacing: "0.1rem",
        fontSize: "4rem"
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
        <Grid container style={{ alignItems: "center", justifyContent: "center", backgroundColor: "black" }}>
            <div >
                <h2 className={classes.heading}> Quick Bites </h2>
                <hr/>
                <div class="row">
                {MenuItems.map((item) => (
                    <div className="card-body"> 
                    <div className="col-3">    
                        <MenuCard project={item} />
                    </div>
                    </div>
                    ))} 
                </div>   
            </div>
        </Grid>
    )
}

export default Menu