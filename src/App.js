import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import TourList from './components/Tourlist'
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
