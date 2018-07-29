import React, { Component } from 'react';
import './App.css';
import img1 from './images/computer.jpeg';
import img2 from './images/mountains.jpeg';
import img3 from './images/trees.jpeg';
import img4 from './images/turntable.jpeg';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel images={[img1, img2, img3, img4]} />
      </div>
    );
  }
}

export default App;
