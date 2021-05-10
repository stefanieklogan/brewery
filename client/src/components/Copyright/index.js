import React from 'react'
import './style.css';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    footerColor: {
        color: "black",
    }
})

//set the copyright date to the current year so that it automatically updates

function Copyright() {
    const styles = useStyles();
    const currentYear = new Date().getFullYear();
    return (
    <div >
        <footer className={styles.footerColor}>
            <div className="footer fixed-bottom text-center p-2"> 
            <p>Copyright © Celebration Brewing {currentYear}</p>
            </div>
        </footer>
    </div>
    )
}

export default Copyright