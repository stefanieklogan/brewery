import React from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from 'react-bootstrap/Form';
// import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             textAlign: "center",
//         },
//     },
//     titleStyle: {
//         backgroundColor: "white",
//         color: "#c89019",
//         textAlign: "center",
//         marginTop: "80px",
//         marginBottom: "10px",
//     },
// }));

class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            feedback: '',
            checkbox: false,
            email: ''
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
        console.log(this.state)
        console.log(`${this.state.name} ${this.state.feedback} ${this.state.email} ${this.state.checkbox}`)
        axios.post('/api/feedback', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        alert(`Thank you for your feedback!`)
        e.preventDefault();
    }

    render() {
        const { name, feedback, checkbox, email } = this.state
        const isChecked = this.state.checkbox;
        let emailInput;

        if (isChecked) {
            emailInput = (
                <div>
                    {/* <label>Email:</label>{isChecked} */}
                    <TextField className="email" type="text" label="Email" variant="outlined" value={email} onChange={this.handleEmailChange} />{isChecked}
                </div>
            )
        }

        // const styles = useStyles();

        return (

            <Form onSubmit={this.handleSubmit}>
                <div>
                    <Typography component="h5" variant="h5">
                        GET IN TOUCH
                    </Typography>
                    <Typography component="p" variant="inherit"> 
                    We value your input and feedback! Please fill out the form below and we will get in touch as soon as possible! Thank you!
                    </Typography>
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="Enter Name" 
                    value={name} 
                    onChange={this.handleNameChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Message" rows={3} value={feedback} 
                    onChange={this.handleFeedbackChange}/>
                </Form.Group>
                {/* <label>Name:</label> */}
                {/* <TextField id="outlined-password-input" label="Name" variant="outlined" className="name" type="text" value={name} onChange={this.handleNameChange} /> */}
                {/* <label>Feedback:</label> */}
                {/* <TextField id="outlined-multiline-static" multiline rowsMax={4} label="Feedback" variant="outlined" className="feedback" type="text" value={feedback} onChange={this.handleFeedbackChange}></TextField> */}
                <div>
                    <p className="checkbox">
                        Check here if you would like to be contacted:</p>
                        <Checkbox value={checkbox} onChange={this.handleCheckboxChange} />
                        <p className="email">{emailInput}</p>
                </div>

                <Button className="submitBtn" variant="outlined" type="submit">Submit</Button>

            </Form>
        );
    }
}

export default FeedbackForm;