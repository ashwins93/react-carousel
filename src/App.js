import React, { Component } from 'react';
import './App.css';
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image4.jpg';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel height="300px" images={[img1, img2, img3, img4]} />
      </div>
    );
  }
}

export default App;
