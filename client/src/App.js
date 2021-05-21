import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
// import Copyright from './components/Copyright';
import Homepage from './pages/Home'
import Beer from './pages/Beer';
import AboutUs from './pages/AboutUs';
// import Feedback from './pages/FeedbackForm';
import VisitUs from './pages/VisitUs';
import Contact from './pages/Contact';
import SignUp from "./pages/Signup"
import Login from './pages/AdminLogin';
import FeedbackResults from './pages/FeedbackResults';
import AdminSignupForm from './pages/AdminSignup';

import { createMuiTheme, MuiCssBaseline } from '@material-ui/core';

const font = 'Barlow, Playfair Display';

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [raleway]
  //     }
  //   }
  // }
})


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage /></Route>
        <Route exact path="/beer">
          <Beer /></Route>
        <Route exact path="/about">
          <AboutUs /></Route>
        <Route exact path="/contact">
          <Contact /></Route>
        <Route exact path="/visit">
          <VisitUs /></Route>
        <Route exact path="/signup">
          <SignUp /></Route>
          <Route exact path="/admin/signup">
          <AdminSignupForm /></Route>
        <Route exact path="/admin/login">
          <Login /></Route>
        <Route exact path='/admin/feedback'>
          <FeedbackResults /></Route>
      </Switch>
      {/* <Copyright /> */}
    </Router>
  );
}

export default App;
