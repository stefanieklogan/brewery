// import React, { Component } from 'react';
// // import the component
// import Mailchimp from 'react-mailchimp-form'

// // need to install package npm install react-mailchimp-form

// class App extends Component {

//     render() {
//         return (
//             <Mailchimp
//                 action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
//                 fields={[
//                     {
//                         name: 'EMAIL',
//                         placeholder: 'Email',
//                         type: 'email',
//                         required: true
//                     },
//                     {
//                         name: 'FNAME',
//                         placeholder: 'name',
//                         type: 'text',
//                         required: true
//                     }
//                 ]}
//                 messages={
//                     {
//                         sending: "Sending...",
//                         success: "Thank you for subscribing!",
//                         error: "An unexpected internal error has occurred.",
//                         empty: "You must write an e-mail.",
//                         duplicate: "Too many subscribe attempts for this email address",
//                         button: "Subscribe!"
//                     }
//                 }
//                 // Add a personalized class
//                 className='<YOUR_CLASSNAME>'
//             />
//         );
//     }
// }

// export default App;