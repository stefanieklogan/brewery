import React, { Component } from 'react';
import TableHtml from '../TableHtml';
import API from '../../utils/API'

class TableData extends Component {
    state = {
        rows: [[]],
        headings: ["Date", "Name", "Email", "Contact?", "Feedback"],
        format: "",
        feedback: [],
        sort: "DESC"
    };

    componentDidMount() {
        this.grabFeedback();
    }

    displayFeedback = () => {
console.log("made it:")
        const rows = this.state.feedback;
        var renderTable = rows.map(feedback => {
                return [feedback.id, feedback.date_created, feedback.name, feedback.email, feedback.contact, feedback.feedback]
            })
        console.log(rows);
        this.setState( { rows: renderTable } )
    }

    grabFeedback = () => {
        API.getFeedback()
            .then(feedback => {
                this.setState({ feedback: feedback.data }, () => {this.displayFeedback()})
                console.log(feedback.data);
                // console.log(this.props.search);
            })
            .catch(err => console.log(err));
    };
   // componentDidUpdate(prevProps) {
    //     if (this.props.search !== prevProps.search) this.displayFeedback();
    // }
    // handleClickChange = e => {
    //     if (this.state.sort === "DESC") {
    //         this.setState({ sort: "ASCEND" })
    //     } else {
    //         this.setState({ sort: "DESC"})
    //     }
    //     this.handleSort();
    // }

    // handleSort = () => {
    //     const sortedArr = [...this.state.feedback]
    //     console.log(sortedArr);
    //     if (this.state.sort === "DESC") {
    //     sortedArr.sort((a,b) => a.date.localeCompare(b.date))}
    //     else {
    //     sortedArr.sort((a,b) => b.date.localeCompare(a.date))
    //     }
    //     this.setState({feedback:sortedArr}, () => {this.displayFeedback()})
    // }
    render() {
        return (
            <TableHtml
                headings={this.state.headings}
                key={this.state.id}
                click={this.handleClickChange}
                row={this.state.rows}
                format={this.state.format}
            />
        )
    };

}

export default TableData;