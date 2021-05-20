import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleEmailChange = (e) => {
			this.setState({ email: e.target.value })
		}
		this.handlePasswordChange = (e) => {
			this.setState({ password: e.target.value })
		}
	}

	handleLogin = e => {
		e.preventDefault();
		axios.post('/api/admin/login', {
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}


	render() {
		const { email, password } = this.state
		return (
			<form noValidate autoComplete="off" >
				<TextField id="outlined-basic" label="Email" variant="outlined" value={email}
					onChange={this.handleEmailChange} />

				<TextField id="outlined-basic" label="Password" variant="outlined" value={password}
					onChange={this.handlePasswordChange} />

				<Button type="submit" onClick={this.handleLogin} >Log In</Button>
				
			</form>
		);
	}
}

export default Login;