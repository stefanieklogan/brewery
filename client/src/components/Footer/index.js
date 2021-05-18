import React from 'react';
// import './style.css';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Logo from "../../assets/Celebration_LogoBLACK.png";
// import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


const useStyles = makeStyles({

    navStyle: {
        backgroundColor: "#efe9dd",
    },
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
    link: {
        color: "black",
        textDecoration: "none",
    }
})

function Footer() {
    const styles = useStyles();
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Typography className={styles.para} component="p" variant="p">
                            <p>1234 Disney World Dr.
                            Orlando, Florida 33333

                        (000) 000-0000</p>
                        </Typography>
                    </Col>
                    <Col>
                        <div className={styles.beerImage}>
                            <Image src={Logo} alt="Celebration Brewing Logo" fluid />
                        </div>
                    </Col>
                    <Col>
                        <Typography className={styles.titleStyle} component="h3" variant="h3">
                            Explore
                    </Typography>
                        <Typography className={styles.para} component="p" variant="p">
                            <Link className="nav-link" to="/"> Home </Link>
                            <Link className="nav-link" to="/about"> About Us</Link>
                            <Link className="nav-link" to="/beer"> The Beer </Link>
                            <Link className="nav-link" to="/visit"> Visit Us </Link>
                            <Link className="nav-link" to="/events"> Events </Link>
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Footer