import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = (e) => {
      this.setState({ email: e.target.value });
    };
    this.handlePasswordChange = (e) => {
      this.setState({ password: e.target.value });
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/admin/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        res.status === 200
          ? this.props.history.push("/admin/feedback")
          : console.log("no redirect");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form noValidate autoComplete="off">
        <Typography
          style={{
            fontFamily: "Barlow",
            fontSize: "32px",
            marginLeft: "2%",
            marginTop: "2%",
          }}
        >
          LOG INTO YOUR ADMIN ACCOUNT
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={this.handleEmailChange}
          style={{ marginTop: "2%", marginRight: "1%", marginLeft: "2%" }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={this.handlePasswordChange}
          style={{ marginRight: "1%", marginTop: "2%" }}
        />

        <Button
          type="submit"
          onClick={this.handleLogin}
          style={{
            marginTop: "2.5%",
            border: "solid 1px",
            borderColor: "#cd8f2a",
            color: "#cd8f2a",
          }}
        >
          Log In
        </Button>
      </form>
    );
  }
}

export default Login;
