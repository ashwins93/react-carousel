import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        {this.props.images.map((image, i) => {
          return <img key={i} src={image} alt="" />;
        })}
      </div>
    );
  }
}

export default Carousel;
