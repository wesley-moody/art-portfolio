import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import art_logo from "./art_logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
// import Product from "./components/Product";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Productlist} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
