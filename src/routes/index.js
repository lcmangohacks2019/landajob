import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from '../components/Profile';
import UserCard from '../components/UserCard'

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Profile} />
      <Route path="/Skills" component={UserCard} />
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
);

export default Routes;