import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/api'

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Date", "Name", "Email", "Contact?", "Feedback"],
        format: "",
        feedback: [],
        sort: "DESC"
    };

    componentDidMount() {
        this.displayFeedback();
    }

    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) this.displayFeedback();
    }

    displayFeedback = () => {

        const rows = this.state.feedback.filter(feedback => feedback.name.toLowerCase().includes(this.props.search))
            .map(feedback => {
                return [feedback.date_created, feedback.name, feedback.email, feedback.contact, feedback.feedback]
            })
        console.log(rows);
        this.setState({ rows })
    }

    // handleClickChange = e => {
    //     if (this.state.sort === "DESC") {
    //         this.setState({ sort: "ASCEND" })
    //     } else {
    //         this.setState({ sort: "DESC"})
    //     }
    //     this.handleSort();
    // }

    // handleSort = () => {
    //     const sortedArr = [...this.state.employees]
    //     console.log(sortedArr);
    //     if (this.state.sort === "DESC") {
    //     sortedArr.sort((a,b) => a.date.localeCompare(b.date))}
    //     else {
    //     sortedArr.sort((a,b) => b.date.localeCompare(a.date))
    //     }
    //     this.setState({employees:sortedArr}, () => {this.displayFeedback()})
    // }

    displayFeedback = () => {
        API.getFeedback()
            .then(feedback => {
                this.setState({ feedback: feedback.data.results }, () => {this.displayFeedback()})
                console.log(feedback.data.results);
                console.log(this.props.search);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <TableHtml
                headings={this.state.headings}
                click={this.handleClickChange}
                rows={this.state.rows}
                format={this.state.format}
            />
        )
    };

}

export default TableData;