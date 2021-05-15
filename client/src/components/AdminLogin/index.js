import React from 'react';
import Button from '@material-ui/core/Button';
// import Form from '@material-ui/core/form';

class AdminLogin extends React.Component {
constructor(props) {    
      super(props);
      this.state = {
          email: '',
          password: ''
      }
    
      this.handleEmailChange = (e) => {
          this.setState({ email: e.target.value})
      }
 
      this.handlePasswordChange = (e) => {
          this.setState({ password: e.target.value})
      }
      
    }
        
        render() {
            return (
                <form className="login-form">
                    <h2>Admin Login</h2>
                    <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                            <Button className="loginBtn">Login</Button>
            </form>
        )

}}


export default AdminLogin;