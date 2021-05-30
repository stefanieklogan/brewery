import React from 'react';
import {Container, Typography} from '@material-ui/core';

function MailchimpForm() {
    return (
        <Container style={{backgroundColor: "#f4eee3", border: "solid 2px", borderColor: "#c89019", padding: "3%", marginTop: "3%", justifyContent: "center", alignItems: "center", justify: "center", display: "flex"}} id="mc_embed_signup">

<form action="https://herokuapp.us6.list-manage.com/subscribe/post?u=3dc81bfbf90e2c6dafba9ba03&amp;id=29655d6c76" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
	            <Typography style={{textAlign: "center", fontFamily: "Barlow", fontSize: "48px", marginBottom: "1%"}}>GET TAPPED IN &#9993;</Typography>
                <Typography style={{textAlign: "center", fontFamily: "Red Hat Display", fontSize: "18px", marginBottom:"2%"}} >Stay up to date with all the latest brewery events, newest beer releases and more!</Typography> 
                {/* <div className="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
	                <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
	                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                </div>
                <div className="mc-field-group">
	                <label for="mce-FNAME">First Name </label>
	                <input type="text" value="" name="FNAME" className="" id="mce-FNAME"/>
                </div>
                <div className="mc-field-group">
	                <label for="mce-LNAME">Last Name </label>
	                <input type="text" value="" name="LNAME" className="" id="mce-LNAME"/>
                </div> */}
                </div>
	            {/* <div id="mce-responses" className="clear">
		            <div className="response" id="mce-error-response" style={{display:"none"}}></div>
		            <div className="response" id="mce-success-response" style={{display:"none"}}></div>
	            </div>     */}
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_b7ab21bae1fd6631ff7334f76_77244976d7" tabIndex="-1" value="onChange"/></div>
                <div style={{justifyContent: "center", alignItems: "center", justify: "center", display: "flex", marginTop: "2%"}} className="clear"><input style={{backgroundColor: "black", fontFamily: "Barlow", fontSize: "18px"}} type="submit" value="JOIN OUR NEWSLETTER" name="subscribe" id="mc-embedded-subscribe" className="button"/>
            </div>
            </form>
        </Container>
    )
};

export default MailchimpForm;

