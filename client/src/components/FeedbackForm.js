import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

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

        this.handleCheckboxChange = (e) => {
            this.setState({ checkbox: e.target.value })
        }
    }

    handleSubmit = e => {
        console.log(`${this.state.name} ${this.state.feedback} ${this.state.email} ${this.state.checkbox}`)
        alert(`${this.state.name} ${this.state.feedback} ${this.state.email} ${this.state.checkbox}`)
        e.preventDefault()
    }

    render() {
        const { name, feedback, checkbox, email } = this.state
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
                    <p>I would like to be contacted:</p>
                    <Checkbox value={checkbox} onChange={this.handleCheckboxChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input className="email" type="text" value={email} onChange={this.handleEmailChange} />
                </div>

                    <button type="submit">Submit</button>
  
            </form>
        );
    }
}

export default FeedbackForm;