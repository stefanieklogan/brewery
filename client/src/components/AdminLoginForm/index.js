import React from 'react';
// import Form from '@material-ui/core/form';

function FormHtml() {
    
        return (
            <form className="login-form">
                <h2>Admin Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Button className="loginBtn">Login</Button>
            </form>
        )
    }

export default FormHtml;