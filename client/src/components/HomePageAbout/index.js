import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/button';


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
            <p>A blurb about Celebration Brewery. How it started, where it's located, etc. Short and sweet description</p>
            <Button variant="contained"> Visit Us </Button>
</div>
        
    )
}

export default HomePageAbout