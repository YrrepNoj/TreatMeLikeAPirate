import React, { Component } from "react";
import Header from "./components/Header";
import GeoDisplay from "./panels/GeoDisplay";
import Grid from "./components/Grid";
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
    const items = [
      { id: "1", name: "Geographic Display", content: <GeoDisplay /> },
      { id: "2", name: "Data Manager", content: <p>hello world 2</p> },
    ];
    const layout = [
      { i: "1", x: 0, y: 0, w: 20, h: 20 },
      { i: "2", x: 20, y: 0, w: 10, h: 10 },
    ];
    return (
      <div>
        <Grid items={items} layout={layout} />
        {/* <Header />
         */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  getShipwrecks: () => {
    console.log("dispatching the shipwreck")
    dispatch({ type: GET_SHIPWRECK_OBSERVATIONS_REQUESTED })
  
  },
  getUFOs: () => {
    dispatch({ type: GET_UFO_OBSERVATIONS_REQUESTED })
  }
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
