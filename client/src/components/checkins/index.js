import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import { Avatar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
// import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#f4eee3",
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

function Checkins() {
	const classes = useStyles();
	const [checkins, setCheckins] = useState([])

	const [currentCheckin, setCurrentCheckin] = useState(null)

	useEffect(() => {
		if (currentCheckin === checkins.length - 1) {
			setCurrentCheckin(0)
		} else {
		setTimeout(function() {
			setCurrentCheckin(currentCheckin + 1);
		},3000)}
	}, [currentCheckin])
	
	useEffect(() => {
		loadCheckins()
	}, [])

	function loadCheckins() {
		API.getCheckins()
			.then(res =>
				setCheckins(res.data),
				setCurrentCheckin(0)
			)
			.catch(err => console.log(err));
	};

	const SmallAvatar = withStyles((theme) => ({
		root: {
			width: 22,
			height: 22,
			border: `1px solid ${theme.palette.background.paper}`,
		},
	}))(Avatar);

	return (
		checkins.length> 0 ? 
		<Grid className={classes.root} container justify="center">
			<List > 
					<Grid  item xs={12}>
						<ListItem align-items="flex-start">
							<ListItemAvatar>
								<Badge
									overlap="circle"
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									badgeContent={<SmallAvatar src={checkins[currentCheckin].beer.beer_label} />}
								>
									<Avatar className={classes.large} src={checkins[currentCheckin].user.user_avatar} />
								</Badge>
							</ListItemAvatar>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="overline"
										className={classes.inline}
										color="textPrimary">
										{' '}{checkins[currentCheckin].user_name}
										{' '}is drinking{' '}
										<b>{checkins[currentCheckin].beer.beer_name}</b>
										{' '}at{' '}
										{checkins[currentCheckin].brewery.brewery_name}{' '}
									</Typography>
								</React.Fragment>
							} />
						</ListItem>
					</Grid>
			
			</List>
		</Grid> :
		<div>Loading</div>
	)
}

export default Checkins;
