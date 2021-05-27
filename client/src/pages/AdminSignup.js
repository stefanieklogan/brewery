import React from 'react';
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core'
import axios from 'axios';

class AdminSignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			password: ''
		};

		this.handleEmailChange = (e) => {
			this.setState({ email: e.target.value });
		};
		this.handleNameChange = (e) => {
			this.setState({ name: e.target.value });
		};

		this.handlePasswordChange = (e) => {
			this.setState({ password: e.target.value });
		};

		this.handleSubmit =
			this.handleSubmit.bind(this);
	}

	handleSubmit = e => {
		e.preventDefault();
		axios.post('/api/admin/signup', this.state)
			.then(res => {
				res.status === 200 ?
					this.props.history.push('/admin/feedback') :
					console.log("no redirect");
			}).catch(error => {
				console.log(error);
			});
	};

	render() {
		const { email, name, password } = this.state
		return (
			<form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
				<Typography style={{fontFamily: "Barlow", fontSize: "32px", marginLeft: "2%", marginTop: "2%"}}>
					SIGN UP FOR AN ADMIN ACCOUNT
				</Typography>

				<TextField id="outlined-basic" label="Email" variant="outlined"
					value={email}
					onChange={this.handleEmailChange}
					style={{marginTop: "2%", marginRight: "1%", marginLeft: "2%"}}
					/>

				<TextField id="outlined-basic" label="Name" variant="outlined"
					value={name}
					onChange={this.handleNameChange}
					style={{marginRight: "1%", marginTop: "2%"}}
					/>

				<TextField id="outlined-basic" label="Password" variant="outlined" value={password}
					onChange={this.handlePasswordChange}
					style={{marginRight: "1%", marginTop: "2%"}}
					/>

				<Button type="submit" style={{marginTop: "2.5%", border: "solid 1px", borderColor: "#cd8f2a", color: "#cd8f2a"}}>Sign Up</Button>
			</form>
		);
	}
}

export default withRouter(AdminSignupForm);