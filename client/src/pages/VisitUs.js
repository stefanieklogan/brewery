import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/Celebration_Logo.png";
import Map from "../assets/map.png";
// import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
    },
    titleStyle: {
        backgroundColor: "white",
        color: "black",
        textAlign: "left",
        marginTop: "80px",
        marginBottom: "10px",
    },
    para: {
        textAlign: "left",
        marginTop: "30px",
        paddingRight: "100px",
        paddingLeft: "100px",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "200px",
        width: "250px",
        marginTop: "100px",
    },
    link: {
        color: "black",
        textDecoration: "none",
    },
    mapImage: {
        height: "250px",
        marginTop: "100px",
        alignItems: "center"

    }
}));

function VisitUs() {
    const styles = useStyles();
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={8}>
                        <div className={styles.beerImage}>
                            <Image className={styles.image} src={Logo} alt="Celebration Brewing Logo" fluid />
                            <Typography className={styles.titleStyle} component="h3" variant="h3">
                                Contact Us
                    </Typography>
                            <Typography className={styles.titleStyle} component="h5" variant="h5">
                                VISIT CELEBRATION BREWING
                    </Typography>
                            <Typography className={styles.para} component="p" variant="inherit">
                                A blurb about taking a brewery tour at Celebration brewing.
                    </Typography>
                            <div className="justify-content-center">
                                <Link className="nav-link" to="/about"> PLAN YOUR VISIT</Link>                    </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={styles.mapImage}>
                            <Image src={Map} alt="Celebration Brewing Logo" fluid />
                            <Typography className={styles.titleStyle} component="h3" variant="h3"></Typography>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default VisitUs