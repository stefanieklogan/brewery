import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row }from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import Copyright from '../components/Copyright/';
import Footer from '../components/Footer/';

import { Grid, Card, Typography, CardActionArea, Container } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // padding: '30px',
        marginRight: "3%",
        marginLeft: "3%",
        marginBottom: "3%",
        marginTop: "6%",
        borderBox: "box-sizing",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        justify: "center",
        height: "300px",
        width: "600px"  
    },
    menu: {
        height: "300px",
        width: "600px",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        justify: "center",

    }
    // root: {
    //     width: 350,
    //     marginLeft: "15px",
    //     marginBottom: "75px",
    //     padding: "10px",
    //     backgroundColor: "#efe9db",
    // },
})

function MenuCard(props) {
    const styles = useStyles();
    return (
        <div className={styles.root}>
        <Grid className={styles.root} style={{backgroundColor: "black" }}>
        {/* <Grid className={styles.root}> */}
        <Grid container fluid="true" className={styles.menu}>
                <Card style={{ backgroundColor: "black", border: "1px solid white" }}> 
                    <Typography style={{ textAlign: "center", padding: "3%", fontFamily: "Playfair Display", color: "white" }} component="h4" variant="h4">
                        {props.project.food} <span style={{ color: "#cd8f2a" }}> | </span> {props.project.price}
                    </Typography>
                    <div style={{justify:"center", justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <hr style={{ width: "40%", height: "2px", color: "#c89019", opacity: 0.7 }} />
                    </div>                    
                    <Typography style={{ textAlign: "center", padding: "3%", fontFamily: "Playfair Display", color: "white" }} component="h4" variant="h4">
                        {props.project.description}
                    </Typography>
                </Card>               
        </Grid>
        </Grid>
        </div>

    )
}

export default MenuCard