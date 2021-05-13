import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Logo from "../../assets/Celebration Brewing.png"

function HomePagePic() {
    return (
        <Container>
            <Row>
                <Image src={Logo} />
            </Row>
        </Container>
    )
}

export default HomePagePic
