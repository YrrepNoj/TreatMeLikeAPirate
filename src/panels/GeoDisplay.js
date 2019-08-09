import React from "react";
import { connect } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class GeoDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 38.859,
      lng: -95,
      zoom: 5,
    };
  }
  render() {
    const { observations } = this.props;
    const position = [this.state.lat, this.state.lng];
    return (
      <Map style={{ height: "100vh" }} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {observations &&
          observations.map(obs => (
            <Marker key={obs.id} position={position}>
              <Popup>
                <span>{obs.description}</span>
              </Popup>
            </Marker>
          ))}
      </Map>
    );
  }
}
const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeoDisplay);
