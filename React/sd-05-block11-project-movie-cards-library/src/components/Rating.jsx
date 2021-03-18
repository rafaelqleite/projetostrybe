import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">
        <div className="movie-card-rating">
          {this.props.rating}
        </div>
      </div>
    );
  }
}

export default Rating;
