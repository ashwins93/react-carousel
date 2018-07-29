import React from 'react';
import TweenMax from 'gsap/TweenMax';
import './Carousel.css';

class Carousel extends React.Component {
  state = {
    images: [...this.props.images],
    animating: false,
    currentImage: 0,
    incomingImage: 1
  };

  currentImgRef = React.createRef();
  incomingImgRef = React.createRef();

  next = () => {
    let incoming = (this.state.currentImage + 1) % this.state.images.length;
    this.setState(
      prevState => ({
        incomingImage: incoming,
        animating: true
      }),
      () => {
        TweenMax.to(this.currentImgRef.current, 0.5, {
          xPercent: -100,
          onComplete: () => {
            TweenMax.set(this.currentImgRef.current, { xPercent: 0 });
          }
        });
        TweenMax.fromTo(
          this.incomingImgRef.current,
          0.5,
          { xPercent: 100 },
          {
            xPercent: 0,
            onComplete: () =>
              this.setState({
                currentImage: incoming,
                animating: false
              })
          }
        );
      }
    );
  };

  previous = () => {
    let incoming =
      this.state.currentImage - 1 >= 0
        ? this.state.currentImage - 1
        : this.state.images.length - 1;
    this.setState(
      prevState => ({
        incomingImage: incoming,
        animating: true
      }),
      () => {
        TweenMax.to(this.currentImgRef.current, 0.5, {
          xPercent: 100,
          onComplete: () => {
            TweenMax.set(this.currentImgRef.current, { xPercent: 0 });
          }
        });
        TweenMax.fromTo(
          this.incomingImgRef.current,
          0.5,
          { xPercent: -100 },
          {
            xPercent: 0,
            onComplete: () =>
              this.setState({
                currentImage: incoming,
                animating: false
              })
          }
        );
      }
    );
  };

  render() {
    return (
      <div className="Carousel" style={{ height: this.props.height }}>
        <img
          ref={this.currentImgRef}
          className="Carousel__img"
          src={this.state.images[this.state.currentImage]}
          alt=""
        />
        {this.state.animating ? (
          <img
            ref={this.incomingImgRef}
            className="Carousel__img Carousel__img--animate"
            src={this.state.images[this.state.incomingImage]}
            alt=""
          />
        ) : null}
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
