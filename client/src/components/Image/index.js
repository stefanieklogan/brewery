import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Logo from "../../assets/Celebration Brewing.png"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    image: {
        display: "flex",
    }
})

function HomePagePic() {
    const styles = useStyles();
    return (
        <Container fluid>
            <Row>
                <Image className={styles.image} src={Logo} fluid />
            </Row>
        </Container>
    )
}

export default HomePagePic;
