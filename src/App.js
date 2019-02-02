import React, { Component } from 'react';
import './App.css';
import Profile from "./components/Profile";
import Radar from "./components/Radar";

class App extends Component {
  render() {
    return (
      <div>
      <Profile />
      <Radar/>
      </div>
    );
  }
}

export default App;
