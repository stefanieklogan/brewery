import React from 'react'
import './style.css';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    footerColor: {
        color: "black",
    }
})

function Copyright() {
    const styles = useStyles();
    return (
    <div >
        <footer className={styles.footerColor}>
            <div className="footer fixed-bottom text-center p-2"> Copyright © Celebration Brewing 2021
            </div>
        </footer>
    </div>
    )
}

export default Copyright