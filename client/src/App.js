import React, { Component } from 'react';
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

function App() {

  return (
    <div className="App">
      <HashRouter basename="/">
        <NavBar />
        <Jumbotron />
        <HomePagePic />
        <HomePageAbout />
        <SignUpForm />
        <Switch>
          {<Route exact path="/feedback"><FeedbackForm /></Route>}
          {/* <Route exact path="/"><Home /></Route> */}
          {/* <Route exact path="/portfolio"><Portfolio /></Route> */}
          {/* <Route exact path="/contact"><Contact /></Route>  */}
          {/* <Route exact path="/photography"><Photography /> </Route> */}
          </Switch>
          <Copyright />
      </HashRouter>
    </div>
  );

}

export default App;
