import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row }from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import Copyright from '../components/Copyright/';
import Footer from '../components/Footer/';

import { Grid, Card, Typography, CardActionArea, CardContent, Container } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        // marginRight: "3%",
        // marginLeft: "3%",
        marginTop: "2%",
        marginBottom: "2%",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        display: "flex",
        // height: "300px",
        width: "100%",
        border: "1px solid #c89019",
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
})

function MenuCard(props) {
    const styles = useStyles();
    return (
        <Container className={styles.root}>
        <Grid style={{backgroundColor: "black" }}>
            <Grid container fluid="true" className={styles.menu}>
                <CardContent style={{ backgroundColor: "black", width: "100%" }}> 
                    <Typography style={{ textAlign: "center", padding: "3%", fontFamily: "Playfair Display", color: "white" }} component="h4" variant="h4">
                        {props.project.food} <span style={{ color: "#cd8f2a" }}> | </span> {props.project.price}
                    </Typography>
                    <div style={{justify:"center", justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <hr style={{ width: "40%", height: "2px", color: "#c89019", opacity: 0.7 }} />
                    </div>                    
                    <Typography style={{ textAlign: "center", padding: "3%", fontFamily: "Playfair Display", color: "white", fontSize: "1.5rem"}} component="h4" variant="h4">
                        {props.project.description}
                    </Typography>
                </CardContent>               
            </Grid>
        </Grid>
        </Container>

    )
}

export default MenuCard