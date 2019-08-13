import React, { Component } from "react";
import Header from "./components/Header";

import GeoDisplay from "./panels/Geo/GeoDisplay";
import Grid from "./components/Grid";
import Timeline from "./panels/Timeline";
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
    const panels = [
      { id: "1", name: "Geographic Display", content: <GeoDisplay /> },
      { id: "3", name: "Timeline", content: <Timeline /> },
    ];
    const layout = [
      { i: "1", x: 0, y: 0, w: 30, h: 17 },
      { i: "3", x: 0, y: 17, w: 30, h: 7 },
    ];
    return <Grid items={panels} layout={layout} />;
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
