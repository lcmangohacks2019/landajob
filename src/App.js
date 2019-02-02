import React, { Component } from 'react';
import './App.css';
import Profile from "./components/Profile";
import UserCard from "./components/UserCard";

class App extends Component {
  render() {
    return (
      <div>
      <Profile />
      <UserCard />
      </div>
    );
  }
}

export default App;
