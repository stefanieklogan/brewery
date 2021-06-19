import React from 'react';
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core/styles";

import { CardActionArea, Card, Container, CardContent, Typography, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        // width: "",
        marginLeft: "15px",
        marginRight: "15px",
        marginBottom: "75px",
        padding: "10px",
        backgroundColor: "black",
        justifyContent: "center",
        justify: "center",
        alignItems: "center",
        // display: "flex"
        // flexGrow: 1,
    },
    images: {
        width: "80%",
        margin: "center",
        // justifyContent: "center",
        // justify: "center",
        // alignItems: "center",
        // display: "flex"
    },
    button: {
        backgroundColor: "#cd8f2a",
        color: "white",
        padding: ".8rem",
        borderRadius: "4px",
        textAlign: "center",
        margin: "auto",
        marginBottom: "25px",
        fontFamily: "Playfair Display"
    },
    title: {
        marginBottom: "20px",
        textAlign: "center",
        color: "white",
        fontFamily: "Playfair Display"
        
    },
    description: {
        // marginBottom: "20px",
        margin: "1rem 20rem",
        textAlign: "center",
        color: "white",
        fontFamily: "Playfair Display"
        
    }
})

function EventCard(props) {
    const styles = useStyles();
    return (
            <Card className={styles.root}>
                {/* <CardActionArea> */}
                <div className={styles.images}>
                    <img className="card-img" src={props.project.image} alt={props.project.title}/>
                </div>
                    <CardContent>
                        <Typography className={styles.title} variant="h4" component="h2">
                            {props.project.title}
                        </Typography>
                        <div style={{justify:"center", justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <hr style={{ width: "40%", height: "2px", color: "#c89019", opacity: 0.7, marginBottom: "1.3rem" }} />
                        </div> 
                        <Typography className={styles.description} variant="h5" component="h5">
                        {props.project.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Typography className={styles.button}>{props.project.date}</Typography>
                    </CardActions>
                {/* </CardActionArea> */}
            </Card>
    )
}

export default EventCard