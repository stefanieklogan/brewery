import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from 'react-bootstrap/Button';
import Typography from '@material-ui/core/Typography';
import Logo from "../../assets/Celebration_Logo.png";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const useStyles = makeStyles({

    titleStyle: {
        backgroundColor: "white",
        color: "#c89019",
        textAlign: "center",
        marginTop: "80px",
        marginBottom: "10px",
    },
    para: {
        textAlign: "center",
        marginTop: "30px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        // backgroundColor: "#c89019"
    },
    image: {
        height: "350px",
        width: "350px",
        paddingTop: "100px",
    }
})

function HomePageAbout() {
    const styles = useStyles();
    return (
        <div>
            <Row className="justify-content-md-center">
                <div className={styles.image}>
                <Image src={Logo}alt="Celebration Brewing Logo" fluid />
                </div>
            </Row>
            <Typography className={styles.titleStyle} component="h3" variant="h3">
                ORLANDO'S FAVORITE BREWERY
            </Typography>
            <Typography className={styles.para} component="p" variant="p">
            Since 2021, Celebration Brewing Company has been committed to producing authentic and unique beers that push the boundaries of regular brewing styles and categories. We’re proud to serve our customers with only the best, continually crafting each taste until it’s exactly right.
            <br/>
            <br/>
            Celebration Brewing is a family-owned brewery, taproom, and kitchen located in beautiful Celebration, Florida. We focus on using only the best ingredients and delivering the utmost quality to our customers.
            <br/>
            <br/>
            Everyday, we’re driven by our core values: delivering quality flavors, honoring our customers and celebrating the culture of beer. Experience it for yourself by joining us for a brewery tour, a special event or just to try what’s on tap.
            </Typography>  
            <div className={styles.button}>
            <Button variant="outline-dark" href="#" size="lg" className={styles.button}>Visit Us</Button>
            </div>     
        </div>
        
    )
}

export default HomePageAbout