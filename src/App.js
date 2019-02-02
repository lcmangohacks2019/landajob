import React, { Component } from 'react';
import './App.css';
import Profile from "./components/Profile";
import Example from "./components/UserCard";

class App extends Component {
  render() {
    return (
      <div>
      <Profile />
      <Example />
      </div>
    );
  }
}

export default App;
