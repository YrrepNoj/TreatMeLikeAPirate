import React, { Component } from "react";
import Header from "./components/Header";
import GeoDisplay from "./panels/GeoDisplay";
import { connect } from "react-redux";
import {
  GET_UFO_OBSERVATIONS_REQUESTED,
  GET_SHIPWRECK_OBSERVATIONS_REQUESTED,
} from "./reducers/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getShipwrecks();
    this.props.getUFOs();
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
  getShipwrecks: () => dispatch({ type: GET_SHIPWRECK_OBSERVATIONS_REQUESTED }),
  getUFOs: () => dispatch({ type: GET_UFO_OBSERVATIONS_REQUESTED }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
