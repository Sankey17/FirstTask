import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function React_Redux_Shop() {
  return (
    <div>
        <Router>
        <Header />
        <Switch>
          <Route path="/redux_shop" exact component={ProductListing} />
          <Route path="/redux_shop/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default React_Redux_Shop