import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";

function React_Redux_api() {
  return (
    <div> 
        <BrowserRouter>
    <Switch>
      <Route exact path="/redux_api" component={Home} />
      <Route exact path="/view/:id" component={View} />
      <Route exact path="/edit/:id" component={Edit} />
    </Switch>
  </BrowserRouter></div>
  )
}

export default React_Redux_api