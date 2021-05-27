import React, { Component } from 'react';
import TableHtml from '../components/TableHtml';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";

class TableData extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        rows: [],
        headings: ["Date", "Name", "Email", "Contact?", "Feedback"],
        format: "",
        feedback: [],
        sort: "DESC",
    };

    this.handleClickChange = this.handleClickChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
}

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
                console.log('grab feedback:');
                console.log(res.data);
                this.setState({ rows: res.data });
            })
    };

    handleClickChange = e => {
        console.log('handleClickChange line 4');
        if (this.state.sort === "DESC") {
            this.setState({ sort: "ASCEND" })
        } else {
            this.setState({ sort: "DESC"})
        }
        this.handleSortDate();
    }

    handleSortDate = () => {
        const sortedArr = [...this.state.rows]
        console.log(sortedArr);
        if (this.state.sort === "DESC") {
        sortedArr.sort((a,b) => a.date_created.localeCompare(b.date_created))}
        else {
        sortedArr.sort((a,b) => b.date_created.localeCompare(a.date_created))
        }
        this.setState({rows:sortedArr})
        console.log(sortedArr);
    }

    render() {
        return (
            <>
                <Button type="submit" onClick={this.handleLogout} >
                    Log Out</Button>
                <TableHtml
                    headings={this.state.headings}
                    handleClickChange={() => this.handleClickChange()}
                    rows={this.state.rows}
                    format={this.state.format}
                />
            </>
        )
    };
};

export default withRouter(TableData);

