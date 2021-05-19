import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Logo from "../../assets/Celebration_Logo.png";
import beerImage from "../../assets/brewery.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import { ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@material-ui/core';

// import Container from 'react-bootstrap/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            textAlign: "center",
        },
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
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "350px",
        width: "350px",
        paddingTop: "100px",
    },
    beerImage: {
        height: "350px",

    }
}));

function HomePageAbout() {
    const styles = useStyles();
    return (
        <Grid>
            <Row className="justify-content-md-center">
                <div className={styles.image}>
                    <Image src={Logo} alt="Celebration Brewing Logo" fluid />
                </div>
            </Row>
            <Typography className={styles.titleStyle} component="h3" variant="h3">
                ORLANDO'S FAVORITE BREWERY
            </Typography>
            <Typography className={styles.para} component="p" variant="inherit">
                Since 2021, Celebration Brewing Company has been committed to producing authentic and unique beers that push the boundaries of regular brewing styles and categories. We’re proud to serve our customers with only the best, continually crafting each taste until it’s exactly right.
            <br />
                <br />
            Celebration Brewing is a family-owned brewery, taproom, and kitchen located in beautiful Celebration, Florida. We focus on using only the best ingredients and delivering the utmost quality to our customers.
            <br />
                <br />
            Everyday, we’re driven by our core values: delivering quality flavors, honoring our customers and celebrating the culture of beer. Experience it for yourself by joining us for a brewery tour, a special event or just to try what’s on tap.
            </Typography>
            <div className={styles.root}>
                <Button variant="outlined" href="#"> Visit Us </Button>
            </div>
            <Container>
                <Typography className={styles.titleStyle} component="h3" variant="h3">
                    FEATURED BEERS
            </Typography>
                {/* <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
            {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                    ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
        <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList> */}
                <div className={styles.root}>
                    <Button variant="outlined" href="#"> View All Beers </Button>
                </div>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <div className={styles.beerImage}>
                            <Image src={beerImage} alt="Celebration Brewing Logo" fluid />
                        </div>
                    </Col>
                    <Col>
                        <Typography className={styles.titleStyle} component="h3" variant="h3">
                            WHAT'S HAPPENING
                    </Typography>
                        <Typography className={styles.para} component="p" variant="inherit">
                            Discover all the latest events of festivals that ar happening at Celebration Brewing or that Celebration Brewing will be a part of!
                    </Typography>
                        <div className="justify-content-center">
                            <Button variant="outlined" href="#"> View All Events </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Grid>
    )
};

// const itemData = [
//     {
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         title: 'Breakfast',
//         author: '@bkristastucchio',
//         rows: 2,
//         cols: 2,
//         featured: true,
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//         author: '@rollelflex_graphy726',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//         title: 'Camera',
//         author: '@helloimnik',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//         title: 'Coffee',
//         author: '@nolanissac',
//         cols: 2,
//     },
// ];

export default HomePageAbout