import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
  state = {
    images: [...this.props.images],
    currentImage: 0
  };

  next = () => {
    this.setState(prevState => ({
      currentImage: (prevState.currentImage + 1) % prevState.images.length
    }));
  };

  previous = () => {
    this.setState(prevState => ({
      currentImage:
        prevState.currentImage - 1 >= 0
          ? prevState.currentImage - 1
          : prevState.images.length - 1
    }));
  };

  render() {
    return (
      <div className="Carousel">
        <img
          className="Carousel__img"
          src={this.state.images[this.state.currentImage]}
          alt=""
        />
        <button
          onClick={this.previous}
          className="Carousel__button Carousel__button--left"
        >
          &larr;
        </button>
        <button
          onClick={this.next}
          className="Carousel__button Carousel__button--right"
        >
          &rarr;
        </button>
      </div>
    );
  }
}

export default Carousel;
