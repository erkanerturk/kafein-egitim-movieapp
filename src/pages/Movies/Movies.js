import React, { Component } from "react";

import { connect } from "react-redux";
import Card from "../../components/Card/Card";

class Movies extends Component {
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          {this.props.movies.map(movie => {
            return (
              <div className="col-sm-3">
                <Card
                  title={movie.title}
                  description={movie.description}
                  img={movie.images["Poster Art"].url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    movies: store.app.movies,
    isLoading: store.app.isLoading
  };
};

export default connect(mapStateToProps)(Movies);
