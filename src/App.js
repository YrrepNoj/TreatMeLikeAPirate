import React, { Component } from "react";
import Header from "./components/Header";
import GeoDisplay from "./panels/GeoDisplay";
import { connect } from "react-redux";
import { GET_OBSERVATIONS } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    null;
  }
  render() {
    return (
      <div>
        <Header />
        <GeoDisplay />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  getObservations: () => dispatch({ type: GET_OBSERVATIONS }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
