import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import { connect } from "react-redux";
import { getMovies } from "../../redux/modules/app/app.action";

import { withRouter } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card
                onClickButton={() => this.props.history.push("/movies")}
                title="Movies"
                img="https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg"
              />
            </div>
            <div className="col-sm">
              <Card
                title="Series"
                img="https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getMovies: getMovies
};

const withRouterHome = withRouter(Home);
export default connect(null, mapDispatchToProps)(withRouterHome);
