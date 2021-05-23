import React, { Component } from 'react';
import TableHtml from '../components/TableHtml';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import { withRouter } from "react-router-dom";
// import API from '../utils/API';
import moment from 'moment';


class TableData extends Component {
    state = {
        rows: [],
        headings: ["Date", "Name", "Email", "Contact?", "Feedback"],
        format: "",
        feedback: [],
        sort: "DESC",
        dateMDY: moment('2021-05-21T21:17:23.000Z').format('l')
    };

    componentDidMount() {
        this.grabFeedback();
    };

    handleLogout = e => {
        e.preventDefault();
        axios.post('/api/admin/logout')
            .then(res => res.status === 204 ?
                this.props.history.push('/') :
                console.log("no redirect"))
            .catch(error => { console.log(error)});
    };

    grabFeedback = () => {
        axios.get('/api/feedback')
            .then(res => {
                console.log(res.data);
                this.setState({ rows: res.data });
            })
    };

    // componentDidUpdate(prevProps) {
    //     if (this.props.search !== prevProps.search) this.displayFeedback();
    // }

    handleClickChange = e => {
        if (this.state.sort === "DESC") {
            this.setState({ sort: "ASCEND" })
        } else {
            this.setState({ sort: "DESC"})
        }
        this.handleSort();
    }

    handleSort = () => {
        const sortedArr = [...this.state.feedback]
        console.log(sortedArr);
        if (this.state.sort === "DESC") {
        sortedArr.sort((a,b) => a.date.localeCompare(b.date))}
        else {
        sortedArr.sort((a,b) => b.date.localeCompare(a.date))
        }
        this.setState({feedback:sortedArr}, () => {this.displayFeedback()})
    }

    render() {
        return (
            <>
                <Button type="submit"
                    onClick={this.handleLogout} >
                    Log Out</Button>
                <TableHtml
                    headings={this.state.headings}
                    click={this.handleClickChange}
                    rows={this.state.rows}
                    format={this.state.format}
                />
            </>
        )
    };
};

export default withRouter(TableData);

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

