import React from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

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
                    <label>Email:</label>{isChecked}
                    <input className="email" type="text" value={email} onChange={this.handleEmailChange} />
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input className="name" type="text" value={name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <label>Feedback:</label>
                    <textarea className="feedback" type="text" value={feedback} onChange={this.handleFeedbackChange}></textarea>
                </div>
                <div>
                    <p className="checkbox">Check here if you would like to be contacted:</p><Checkbox value={checkbox} onChange={this.handleCheckboxChange} /><p className="email">{emailInput}</p>
                </div>

                <button className="submitBtn" type="submit">Submit</button>

            </form>
        );
    }
}

export default FeedbackForm;