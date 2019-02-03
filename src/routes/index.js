import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from '../components/Profile';
import UserCard from '../components/UserCard';
import GrowthBoard from '../components/GrowthBoard';
import App from '../components/ProfilePage';

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={UserCard} />
      <Route path="/Skills" component={GrowthBoard} />
      <Route path="/Achievements" component={Profile} />
    </div>
  </Router>
);

export default Routes;