import React from 'react';
//, { Component } removed after React (no unused vars)
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import Copyright from './components/Copyright';
import Jumbotron from './components/Jumbotron';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Image from './components/Image';
import HomePageAbout from './components/HomePageAbout';
// import SignUpForm from './components/SignUpForm';
import FeedbackForm from './components/FeedbackForm';
import AdminLogin from './components/AdminLogin';
import Beer from './pages/Beer';
import AboutUs from './pages/AboutUs';
import VisitUs from './pages/VisitUs';
import FeedbackResults from './components/FeedbackResults';

function Homepage() {

  return (
    <div>
        <Jumbotron />
        <Image />
        <HomePageAbout />
        {/* <SignUpForm /> */}
        <Footer />
        {/* <Copyright /> */}
    </div>
  );

}

function App() {

  return (
    <div className="App">
      <HashRouter basename="/">
        <NavBar />
        <Switch>
          <Route exact path="/feedback"><FeedbackForm /></Route>
          <Route exact path="/admin"><AdminLogin /></Route>
          <Route exact path="/"><Homepage /></Route>
          <Route exact path="/beer"><Beer /></Route>
          <Route exact path="/about"><AboutUs /></Route>
          <Route exact path="/contact"><Contact/></Route>
          <Route exact path="/visit"><VisitUs /></Route>
          <Route exact path='/admin/feedbackresults'><FeedbackResults /></Route>
          </Switch>
          {/* <Copyright /> */}
      </HashRouter>
    </div>
  );

}

export default App;
