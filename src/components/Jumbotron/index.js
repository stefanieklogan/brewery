import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon, InlineIcon } from '@iconify/react';
import untappdIcon from '@iconify-icons/simple-icons/untappd';


const useStyles = makeStyles({
    icons: {
        marginRight: "25px",
        marginLeft: "25px",
        color: "black",
        '&:hover': {
            color: "#c89019",
        }   
    },
    beerIcon: {
       fontSize: "30px",
        marginRight: "25px",
        marginLeft: "25px",
        color: "black",
        '&:hover': {
            color: "#c89019",
        }   
    },
    bodyColor: {
        backgroundColor: "#fffdf9",
    }
})

function Jumbotron() {
    const styles = useStyles();
    return (
    <body className={styles.bodyColor}>
    <div className="jumbo">
        <h1 className="display-4">Celebration Brewery Logo</h1>
    </div>
    <div className="center">
        <a href="https://untappd.com/CelebrationBrewing" rel="noreferrer" target="_blank" className={styles.beerIcon}><Icon icon={untappdIcon} /></a>
        <a href="https://www.instagram.com/celebrationbrewing/" rel="noreferrer" target="_blank" className={styles.icons}><InstagramIcon fontSize="large"/></a>
        <a href="https://www.facebook.com/CelebrationBrewing" rel="noreferrer" target="_blank" className={styles.icons}><FacebookIcon fontSize="large"/></a>
        <a href="https://twitter.com/CelebrationBrew" rel="noreferrer" target="_blank" className={styles.icons}><TwitterIcon fontSize="large"/></a>
    </div>
    </body>

    );
}

export default Jumbotron;