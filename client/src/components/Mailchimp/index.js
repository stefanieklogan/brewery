import React from 'react';
import {Container, Typography} from '@material-ui/core';
// import MailchimpSubscribe from "react-mailchimp-subscribe";

// const url = process.env.REACT_APP_MAILCHIMP_URL;

// const SimpleForm = () => <MailchimpSubscribe url={url} />

// const MailchimpForm = () => (
//     <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//         <div>
//             <SimpleForm onSubmitted={formData => subscribe(formData)} />
//             {status === "sending" && <div style={{ color: "blue"}}>sending...</div>}
//             {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//             {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//         </div>
//     )}
//     />
// )

// export default MailchimpForm





// a basic form
// const CustomForm = ({ status, message, onValidated }) => {
//     let email, name;
//     const submit = () =>
//       email &&
//       name &&
//       email.value.indexOf("@") > -1 &&
//       onValidated({
//         EMAIL: email.value,
//         NAME: name.value
//       });
  
//     return (
//       <div
//         style={{
//           background: "#efefef",
//           borderRadius: 2,
//           padding: 10,
//           display: "inline-block"
//         }}
//       >
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && (
//           <div
//             style={{ color: "red" }}
//             dangerouslySetInnerHTML={{ __html: message }}
//           />
//         )}
//         {status === "success" && (
//           <div
//             style={{ color: "green" }}
//             dangerouslySetInnerHTML={{ __html: message }}
//           />
//         )}
//         <input
//           style={{ fontSize: "2em", padding: 5 }}
//           ref={node => (name = node)}
//           type="text"
//           placeholder="Your name"
//         />
//         <br />
//         <input
//           style={{ fontSize: "2em", padding: 5 }}
//           ref={node => (email = node)}
//           type="email"
//           placeholder="Your email"
//         />
//         <br />
//         <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
//           Submit
//         </button>
//       </div>
//     );
//   };
  
//   class Demo extends Component {
//     render() {
//       const url =
//         "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
//       return (
//         <div>
//           <h1>react-mailchimp-subscribe Demo</h1>
//           <GithubCorner href="https://github.com/revolunet/react-mailchimp-subscribe" />
//           <h2>Default Form</h2>
//           <MailchimpSubscribe url={url} />
//           <h2>Custom Form</h2>
//           <MailchimpSubscribe
//             url={url}
//             render={({ subscribe, status, message }) => (
//               <CustomForm
//                 status={status}
//                 message={message}
//                 onValidated={formData => subscribe(formData)}
//               />
//             )}
//           />
//         </div>
//       );
//     }
//   }
  
//   render(<Demo />, document.querySelector("#demo"));
function MailchimpForm() {
    return (
        <Container style={{backgroundColor: "#f4eee3", border: "solid 2px", borderColor: "#c89019", padding: "3%", marginTop: "3%", justifyContent: "center", alignItems: "center", justify: "center", display: "flex"}} id="mc_embed_signup">

            <form action="https://thisworldtraveled.us20.list-manage.com/subscribe/post?u=b7ab21bae1fd6631ff7334f76&amp;id=77244976d7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
	            <Typography style={{textAlign: "center", fontFamily: "Barlow", fontSize: "48px", marginBottom: "1%"}}>GET TAPPED IN</Typography>
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
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_b7ab21bae1fd6631ff7334f76_77244976d7" tabindex="-1" value=""/></div>
                <div style={{justifyContent: "center", alignItems: "center", justify: "center", display: "flex", marginTop: "2%"}} className="clear"><input style={{backgroundColor: "black", fontFamily: "Barlow", fontSize: "18px"}} type="submit" value="JOIN OUR NEWSLETTER" name="subscribe" id="mc-embedded-subscribe" className="button"/>
            </div>
            </form>
        </Container>
    )
};

export default MailchimpForm;

