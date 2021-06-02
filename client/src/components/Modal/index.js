import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default function TransitionsModal() {
	const history = useHistory();

	const classes = useStyles();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(true);
	},[]);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<Typography style={{ marginTop: "1%", marginBottom: "1%", fontFamily: "Barlow"  }}
						align="center" component="h4" variant="h4">
							Are you 21+ ?
						</Typography>
						<Button
							onClick={handleClose}
							style={{
								marginTop: "2.5%",
								border: "solid 1px",
								borderColor: "#cd8f2a",
								color: "#cd8f2a",
							}}
						>
							Yes, take me to Celebration Brewery!
        </Button>
		<Button
onClick={() => history.goBack()}							style={{
								marginTop: "2.5%",
								border: "solid 1px",
								borderColor: "#cd8f2a",
								color: "#cd8f2a",
							}}
						>
							Not yet, take me back a page!
        </Button>

					</div>

				</Fade>
			</Modal>
		</div>
	);
}
