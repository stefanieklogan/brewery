import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import pbu from "../../assets/pbu_40_black.png";

const useStyles = makeStyles({
    copyrightColor: {
        color: "black",
        marginTop: "20px",
        backgroundColor: "#f4eee3"
    }
});

//set the copyright date to the current year so that it automatically updates

function Copyright() {
    const styles = useStyles();
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.copyrightColor}>
            <div className="footer text-center p-2">
                <p>Copyright © Celebration Brewing {currentYear} - All Rights Reserved</p>
                <img alt="Powered By Untappd" src={pbu}></img>
            </div>
        </div>
    )
}

export default Copyright;