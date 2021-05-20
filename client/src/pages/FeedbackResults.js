import React, { Component } from 'react';
import TableHtml from '../components/TableHtml';
import API from '../utils/API';
import moment from 'moment';

class TableData extends Component {
    state = {
        rows: [],
        headings: ["Date", "Name", "Email", "Contact?", "Feedback"],
        format: "",
        feedback: [],
        sort: "DESC"
    };

    componentDidMount() {
        this.grabFeedback();
    }

    grabFeedback = () => {
        API.getFeedback()
            .then(feedback => {
                this.setState({ rows: feedback.data })
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
                click={this.handleClickChange}
                rows={this.state.rows}
                format={this.state.format}
            />
        )
    };

}

export default TableData;