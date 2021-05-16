import React from 'react';
//, { Component } removed after React (no unused vars)
import NavBar from './components/NavBar';
import Copyright from './components/Copyright';
import Jumbotron from './components/Jumbotron';
// import Home from './pages/Home'
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Photography from "./pages/Photography";
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePagePic from './components/HomePagePic';
import HomePageAbout from './components/HomePageAbout';
import SignUpForm from './components/SignUpForm';
import FeedbackForm from './components/FeedbackForm';
import AdminLogin from './components/AdminLogin';
import BeerList from './pages/Beer';
import FeedbackResults from './components/FeedbackResults';

function Homepage() {

  return (
    <div>
        <Jumbotron />
        <HomePagePic />
        <HomePageAbout />
        <SignUpForm />
        <Copyright />
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
          {/* <Route exact path="/contact"><Contact /></Route>  */}
          {/* <Route exact path="/photography"><Photography /> </Route> */}
          </Switch>
          <Copyright />
      </HashRouter>
    </div>
  );

}

export default App;
