import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
// import Home from './pages/Home'
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Photography from "./pages/Photography";
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
        <NavBar />
        <Jumbotron />
          {/* <Route exact path="/"><Home /></Route> */}
          {/* <Route exact path="/portfolio"><Portfolio /></Route> */}
          {/* <Route exact path="/contact"><Contact /></Route>  */}
          {/* <Route exact path="/photography"><Photography /> </Route> */}
          <Footer />
        </Switch>
      </HashRouter>
    </div>
  );

}

export default App;
