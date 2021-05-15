import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, Card, CardContent, Typography } from "@material-ui/core";
//     CardActions removed from line 5 after typography
const useStyles = makeStyles({
    root: {
        width: 350,
        marginLeft: "15px",
        marginBottom: "75px",
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        flexGrow: 1,
    },
    images: {
        height: 200,
        width: 330,
        margin: "center",
    },
    button: {
        backgroundColor: "#766c5b",
        color: "white",
        '&:hover': {
            backgroundColor: "#bbad94",
            color: "white",
            textDecoration: "none"
        },
        padding: ".8rem",
        borderRadius: "8px",
        textAlign: "center",
        margin: "auto",
        marginBottom: "25px"
    },
    typography: {
        marginBottom: "20px",
        
    }
})

function BeerCard(props) {
    const styles = useStyles();
    return (
            <Card className={styles.root}>
                <CardActionArea>
                <div className={styles.images}>
                    <img className="card-img" src={props.project.image} alt={props.project.title}/>
                </div>
                    <CardContent>
                        <Typography className={styles.typography} variant="h4" component="h2">
                            Beer Name (props.)
                        </Typography>
                        <p className="card-text">Description of beer (API)</p>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                <a href={props.project.live_url} className={styles.button}>{props.project.buttonName}</a>
                </CardActions> */}
            </Card>
    )
}

export default BeerCard