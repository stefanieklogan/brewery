import React from 'react'
import './style.css';
import { makeStyles } from "@material-ui/core/styles";
import pbu from "../../assets/pbu_40_yellow.png"

const useStyles = makeStyles({
    copyrightColor: {
        color: "black",
        position: "sticky"
    }
})

//set the copyright date to the current year so that it automatically updates

function Copyright() {
    const styles = useStyles();
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.copyrightColor}>
            <div className="footer fixed-bottom text-center p-2"> 
            <p>Copyright © Celebration Brewing 
            {currentYear}</p>
            <img alt="Powered By Untappd" src={pbu}></img>
            </div>
        </div>
    )
}

export default Copyright