import React from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			password: ''
		};

		this.handleEmailChange = (e) => {
			this.setState({ email: e.target.value })
		}
		this.handleNameChange = (e) => {
			this.setState({ name: e.target.value })
		}

		this.handlePasswordChange = (e) => {
			this.setState({ password: e.target.value })
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = e => {
		e.preventDefault();
		axios.post('/api/admin/signup', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { email, name, password } = this.state
		return (
			<form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

				<TextField id="outlined-basic" label="Email" variant="outlined" value={email} 
				onChange={this.handleEmailChange} />

				<TextField id="outlined-basic" label="Name" variant="outlined" value={name} 
				onChange={this.handleNameChange} />

				<TextField id="outlined-basic" label="Password" variant="outlined" value={password}
				onChange={this.handlePasswordChange} />

				<Button type="submit" >Sign Up</Button>
			</form>
		);
	}
}

export default SignupForm;