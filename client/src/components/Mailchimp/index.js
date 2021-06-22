import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './style.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://herokuapp.us6.list-manage.com/subscribe/post?u=3dc81bfbf90e2c6dafba9ba03&amp;id=29655d6c76";

const SimpleForm = () => <MailchimpSubscribe url={url} />

function MailchimpForm() {
    return (
        <Container style={{ backgroundColor: "#f4eee3", border: "solid 2px", borderColor: "#c89019", padding: "3%", marginTop: "3%", justifyContent: "center", alignItems: "center", justify: "center", display: "flex" }} id="mc_embed_signup">
            <div id="mc_embed_signup" style={{ backgroundColor: "#f4eee3", }}>
                <div id="mc_embed_signup_scroll">
                    <Typography style={{ textAlign: "center", fontFamily: "Barlow", fontSize: "48px", marginBottom: "1%" }}>GET TAPPED IN</Typography>
                    <Typography style={{ textAlign: "center", fontFamily: "Red Hat Display", fontSize: "18px", marginBottom: "2%" }} >Stay up to date with all the latest brewery events, newest beer releases and more!</Typography>

                </div>
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <div>
                            <SimpleForm onSubmitted={formData => subscribe(formData)} />
                            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                        </div>
                    )}
                />

            </div>
        </Container>
    )
};

export default MailchimpForm;

