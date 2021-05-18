import React from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class FeedbackForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			firstName: '',
			lastName: ''
		};

		this.handleEmailChange = (e) => {
			this.setState({ email: e.target.value })
		}
		this.handleFirstNameChange = (e) => {
			this.setState({ firstName: e.target.value })
		}

		this.handleLastNameChange = (e) => {
			this.setState({ lastName: e.target.value })
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = e => {
		e.preventDefault();
		axios.post('/api/signup', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { email, firstName, lastName } = this.state
		return (
			<form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

				<TextField id="outlined-basic" label="Email" variant="outlined" value={email} 
				onChange={this.handleEmailChange} />

				<TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} 
				onChange={this.handleFirstNameChange} />

				<TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName}
				onChange={this.handleLastNameChange} />

				<Button type="submit" >Sign Up</Button>
			</form>
		);
	}
}

export default FeedbackForm;