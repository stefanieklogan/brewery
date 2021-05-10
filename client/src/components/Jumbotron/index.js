import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon, InlineIcon } from '@iconify/react';
// import untappdIcon from '@iconify-icons/simple-icons/untappd';
// import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import Logo from "../../assets/Celebration_Logo2.png";

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
        backgroundColor: "#efe9dd",
    }
})

function Jumbotron() {
    const styles = useStyles();
    return (
    <div className={styles.bodyColor}>
    <div className="jumbo">
        <img src={Logo}alt="Celebration Brewing Logo" />
        {/* <ResponsiveImgMaterialUi
        lg="../../assets/Celebration Brewing.png"
        /> */}
    </div>
    <div className="center">
        <a href="https://untappd.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.beerIcon}><Icon /></a>
        <a href="https://www.instagram.com/celebrationbrewing/" rel="noopener noreferrer" target="_blank" className={styles.icons}><InstagramIcon fontSize="large"/></a>
        <a href="https://www.facebook.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.icons}><FacebookIcon fontSize="large"/></a>
        <a href="https://twitter.com/CelebrationBrew" rel="noopener noreferrer" target="_blank" className={styles.icons}><TwitterIcon fontSize="large"/></a>
    </div>
    </div>

    );
}

export default Jumbotron;