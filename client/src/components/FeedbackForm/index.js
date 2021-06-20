import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core/';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            feedback: '',
            checkbox: false,
            email: '',
            thanks: false,
        };

        this.handleNameChange = (e) => {
            this.setState({ name: e.target.value })
        }

        this.handleFeedbackChange = (e) => {
            this.setState({ feedback: e.target.value })
        }

        this.handleEmailChange = (e) => {
            this.setState({ email: e.target.value })
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange = (e) => {
        this.setState({ checkbox: !this.state.checkbox })
    }

    handleSubmit = e => {
        if (this.state.checkbox === false) {
            this.setState({ email: '' })
        }
        axios.post('/api/feedback', this.state)
            .then(response => {
                this.setState({ thanks: true })
            })
            .catch(error => {
                console.log(error)
            })

        e.preventDefault();
    }

    render() {
        const { name, feedback, checkbox, email } = this.state;
        const isChecked = this.state.checkbox;
        const isThanks = this.state.thanks;

        let emailInput;

        if (isChecked) {
            emailInput = (
                <div>
                    {/* <label>Email:</label>{isChecked} */}
                    <TextField style={{ color: "white", backgroundColor: "white" }} className="email" type="text" label="Email" variant="outlined" value={email} onChange={this.handleEmailChange} />{isChecked}
                </div>
            )
        }

        let thanksMessage;

        if (isThanks) {
            thanksMessage = (
                <p style={{ color: "white", fontFamily: "Barlow", fontSize: "18px", fontWeight: 300, letterSpacing: ".6px" }}>Thank you for your Input!</p>
            )
        }

        return (
            <Container style={{ width: "75%" }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group style={{ marginBottom: "2%" }} controlId="formBasicEmail">
                        <Form.Control type="name" placeholder="Enter Name" value={name} onChange={this.handleNameChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginBottom: "2%" }} controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Message" rows={3} value={feedback} onChange={this.handleFeedbackChange} />
                    </Form.Group>
                    <div>
                        <p style={{ color: "white", fontFamily: "Barlow", fontSize: "18px", fontWeight: 300, letterSpacing: ".6px" }} className="checkbox">Check here if you would like to be contacted:</p><Checkbox style={{ color: "white" }} value={checkbox} onChange={this.handleCheckboxChange} /><p className="email">{emailInput}</p>
                    </div>
                    <Button style={{ color: "black", backbroundColor: "white" }} className="submitBtn" variant="contained" type="submit">Submit</Button>
                    {thanksMessage}
                </Form>
            </Container>
        );
    }
}

export default FeedbackForm;

