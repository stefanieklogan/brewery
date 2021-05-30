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
            .catch(error => { console.log(error) });
    };

    grabFeedback = () => {
        axios.get('/api/feedback')
            .then(res => {
                this.setState({ rows: res.data });
            })
    };

    handleClickChange = e => {
        if (this.state.sort === "DESC") {
            this.setState({ sort: "ASCEND" })
        } else {
            this.setState({ sort: "DESC" })
        }
        this.handleSortDate();
    }

    handleSortDate = () => {
        const sortedArr = [...this.state.rows];
        if (this.state.sort === "DESC") {
            sortedArr.sort((a, b) => a.date_created.localeCompare(b.date_created))
        }
        else {
            sortedArr.sort((a, b) => b.date_created.localeCompare(a.date_created))
        }
        this.setState({ rows: sortedArr })
    }

    render() {
        return (

            <div style={{backgroundColor: "black"}}>
                <Button type="submit" onClick={this.handleLogout} style={{marginTop: "2.5%", marginLeft: "2%",border: "solid 1px", borderColor: "#cd8f2a", color: "#cd8f2a", fontFamily: "Barlow"}}>
                    Log Out</Button>
                <p style={{fontStyle: 'italic', color: "white", marginTop: "1.5%", marginLeft: "2%", fontFamily: "Red Hat Display"}}>Click on any column header to sort data</p>
                <TableHtml
                    headings={this.state.headings}
                    handleClickChange={() => this.handleClickChange()}
                    rows={this.state.rows}
                    format={this.state.format}
                />
            </div>
        )
    };
};

export default withRouter(TableData);

