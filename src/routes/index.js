import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from '../components/Profile';
import UserCard from '../components/UserCard';
import GrowthBoard from '../components/GrowthBoard';
import App from '../components/ProfilePage';

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Profile} />
      <Route path="/Skills" component={UserCard} />
      <Route path="/Profile" component={GrowthBoard} />
      <Route path="/topics" component={App} />
    </div>
  </Router>
);

export default Routes;