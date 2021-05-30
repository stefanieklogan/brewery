import React from "react";
import Image from 'react-bootstrap/Image';
import Logo from "../../assets/Celebration Brewing.png";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    image: {       
        height: "100%",
        width: "100%",
        backgroundColor: "#f4eee3",
        }
})

function HomePagePic() {
    const styles = useStyles();
    return (
        <Grid fluid >
            <div>
                <Image className={styles.image} src={Logo} />
            </div>
        </Grid>
    )
}

export default HomePagePic;
