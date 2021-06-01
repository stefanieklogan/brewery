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

	useEffect(() => {
		loadCheckins()
	}, [])

	function loadCheckins() {
		// API.getCheckins()
		// 	.then(res =>
		// 		setCheckins(res.data)
		// 	)
		// 	.catch(err => console.log(err));
	};
	const SmallAvatar = withStyles((theme) => ({
		root: {
			width: 22,
			height: 22,
			border: `1px solid ${theme.palette.background.paper}`,
		},
	}))(Avatar);
	return (
		<Grid className={classes.root} container justify="center">
			<List >
				{checkins.map((checkin) => (
					<Grid key={checkin.checkin_id} item xs={12}>
						<ListItem key={checkin.checkin_id} align-items="flex-start">
							<ListItemAvatar>
								<Badge
									overlap="circle"
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									badgeContent={<SmallAvatar src={checkin.beer.beer_label} />}
								>
									<Avatar className={classes.large} src={checkin.user.user_avatar} />
								</Badge>
							</ListItemAvatar>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="overline"
										className={classes.inline}
										color="textPrimary">
										{' '}{checkin.user.user_name}
										{' '}is drinking{' '}
										<b>{checkin.beer.beer_name}</b>
										{' '}at{' '}
										{checkin.brewery.brewery_name}{' '}
									</Typography>
								</React.Fragment>
							} />
						</ListItem>
					</Grid>
				))}
			</List>
		</Grid>
	)
}

export default Checkins;
