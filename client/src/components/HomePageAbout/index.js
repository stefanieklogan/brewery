import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({

    titleStyle: {
        backgroundColor: "white",
        color: "#c89019",
    }
})

function HomePageAbout() {
    const styles = useStyles();
    return (
        <div>
            <h2 className={styles.titleStyle}> ORLANDO'S FAVORITE BREWERY</h2>
            <p>Since 2021, Celebration Brewing Company has been committed to producing authentic and unique beers that push the boundaries of regular brewing styles and categories. We’re proud to serve our customers with only the best, continually crafting each taste until it’s exactly right.
            <br/>
            <br/>
            Celebration Brewing is a family-owned brewery, taproom, and kitchen located in beautiful Celebration, Florida. We focus on using only the best ingredients and delivering the utmost quality to our customers.
            <br/>
            <br/>
            Everyday, we’re driven by our core values: delivering quality flavors, honoring our customers and celebrating the culture of beer. Experience it for yourself by joining us for a brewery tour, a special event or just to try what’s on tap.</p>
            <Button variant="contained"> Visit Us </Button>
</div>
        
    )
}

export default HomePageAbout