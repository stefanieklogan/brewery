import React from 'react';
//, { Component } removed after React (no unused vars)
import NavBar from './components/NavBar';
// import Copyright from './components/Copyright';
import Jumbotron from './components/Jumbotron';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Image from './components/Image';
import HomePageAbout from './components/HomePageAbout';
// import SignUpForm from './components/SignUpForm';
import FeedbackForm from './components/FeedbackForm';
import AdminLogin from './components/AdminLogin';
import BeerList from './pages/Beer';
import FeedbackResults from './components/FeedbackResults';

function Homepage() {

  return (
    <div>
        <Jumbotron />
        <Image />
        <HomePageAbout />
        {/* <SignUpForm /> */}
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
          <Route exact path="/beer"><BeerList /></Route>
          <Route exact path='/admin/feedbackresults'><FeedbackResults /></Route>
          </Switch>
          {/* <Copyright /> */}
      </HashRouter>
    </div>
  );

}

export default App;
