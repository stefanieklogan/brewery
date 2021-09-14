import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import f1 from '../../assets/images/f1.png'
import f2 from '../../assets/images/f2.png'
import f3 from '../../assets/images/f3.png'
import o4 from '../../assets/images/o4.png'
import mockCheckins from '../../assets/images/mockCheckins.gif'
import Image from 'react-bootstrap/Image';


const useStyles = makeStyles({
    image: {
        height: "100%",
        width: "100%",
        backgroundColor: "#f4eee3",
    }
})

function CheckinReplace() {
	const styles = useStyles();
	const [checkinScreens, setCheckins] = useState([])
	const checkinScreenshots =[f1,f2,f3,o4];
	const [currentCheckin, setCurrentCheckin] = useState(null)

	useEffect(() => {
		if (currentCheckin === checkinScreens.length - 1) {
			setCurrentCheckin(0)
		} else {
			setTimeout(function () {
				setCurrentCheckin(currentCheckin + 1);
			}, 6000)
		}
	}, [currentCheckin,checkinScreens.length])

	useEffect(() => {
		loadCheckins()
	}, [])
	
	function loadCheckins() {
				setCheckins(checkinScreenshots)
				setCurrentCheckin(0)
	};

	return (
		
		checkinScreens.length > 0 ?
		<Grid fluid="true">
				<Image src=
				{
					// checkinScreens[currentCheckin]
					mockCheckins
				} 
				className={styles.image} />
				</Grid>
			:
			<div>
				<CircularProgress />
			</div>
	)
}

export default CheckinReplace;
