import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./scenes/Home/Home";
import Catalog from "./scenes/Catalog/Catalog";
import About from "./scenes/About/About";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/catalog" component={Catalog} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
