import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList';

import './App.scss';


class App extends Component {
  render() {
    return (
      <main>
        <Navbar/>
        <TourList/>
      </main>
      
    );
  }
}

export default App;
