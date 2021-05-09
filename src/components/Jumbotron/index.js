import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PublicIcon from "@material-ui/icons/Public";


const useStyles = makeStyles({
    icons: {
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
        <a href="https://github.com/marisanesmith" rel="noreferrer" target="_blank" className={styles.icons}><GitHubIcon fontSize="large"/></a>
        <a href="https://www.instagram.com/thisworldtraveled" rel="noreferrer" target="_blank" className={styles.icons}><InstagramIcon fontSize="large"/></a>
        <a href="https://www.linkedin.com/in/marisa-nesmith" rel="noreferrer" target="_blank" className={styles.icons}><LinkedInIcon fontSize="large"/></a>
        <a href="https://www.thisworldtraveled.com" rel="noreferrer" target="_blank" className={styles.icons}><PublicIcon fontSize="large"/></a>
    </div>
    </body>

    );
}

export default Jumbotron;