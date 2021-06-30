import React from "react";
import { Grid } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon } from '@iconify/react';
// import untappdIcon from '@iconify-icons/mdi/untappd';
import Logo from "../../assets/Celebration_Logo2.png";

const useStyles = makeStyles({
    icons: {
        marginRight: "25px",
        marginLeft: "25px",
        marginTop: "17px",
        color: "black",
        '&:hover': {
            color: "#c89019",
        }
    },
    beerIcon: {
        fontSize: "39px",
        marginRight: "25px",
        marginLeft: "25px",
        color: "black",
        '&:hover': {
            color: "#c89019",
        }
    },
    bodyColor: {
        backgroundColor: "#f4eee3"
    },
    image: {
        height: "75%",
        width: "100%",
        paddingTop: "50px",
        marginBottom: "30px",
    }
})

function Jumbotron() {
    const styles = useStyles();
    return (
        <Grid className={styles.bodyColor}>
            <Container fluid="true">
                <Grid className="justify-content-center">
                    <div className={styles.image}>
                        <Image src={Logo} alt="Celebration Brewing Logo" fluid />
                    </div>
                </Grid>
                <Grid container justify="center">
                    {/* <a href="https://untappd.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.beerIcon}><Icon icon={untappdIcon} /></a> */}
                    <a href="https://www.instagram.com/celebrationbrewing/" rel="noopener noreferrer" target="_blank" className={styles.icons}><InstagramIcon fontSize="large" /></a>
                    <a href="https://www.facebook.com/CelebrationBrewing" rel="noopener noreferrer" target="_blank" className={styles.icons}><FacebookIcon fontSize="large" /></a>
                    <a href="https://twitter.com/CelebrationBrew" rel="noopener noreferrer" target="_blank" className={styles.icons}><TwitterIcon fontSize="large" /></a>
                </Grid>
            </Container>
        </Grid>
    );
}

export default Jumbotron;