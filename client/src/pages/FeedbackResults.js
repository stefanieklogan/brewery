import React, { Component } from 'react';
import TableHtml from '../components/TableHtml';
import API from '../utils/API';
// import moment from 'moment';

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
            }).catch(err => console.log(err));
    };

    handleLogout = e => {
        e.preventDefault();
        axios.post('/api/admin/logout', this.state)
            .then(res => {
                console.log(res)
            }).catch(error => { console.log(error) })
    }

    render() {
        return (
            <div>
                <Button type="submit" 
                onChange={this.handleLogout} >
                    Log Out</Button>
                <TableHtml
                    headings={this.state.headings}
                    click={this.handleClickChange}
                    rows={this.state.rows}
                    format={this.state.format}
                />
            </div>
        )
    };

}

export default TableData;

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