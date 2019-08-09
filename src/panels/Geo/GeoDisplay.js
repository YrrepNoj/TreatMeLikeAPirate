import React from "react";
import { connect } from "react-redux";
import { Map, TileLayer, Marker } from "react-leaflet";
import Popup from "./Popup";
import sizeMe from "react-sizeme";
import OBSERVATION_TYPES from "../../utils/observation_types";

class GeoDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 38.859,
      lng: -95,
      zoom: 4,
    };
  }
  componentDidUpdate() {
    var map = this.refs.map.leafletElement;
    map.invalidateSize();
  }
  render() {
    // const { ufoObservations } = this.props;
    const { shipwreckObservations } = this.props;
    const combinedObservations = shipwreckObservations;

    let observations = [];
    if (combinedObservations && combinedObservations.length) {
      observations = combinedObservations.filter(
        el => typeof Number(el.year) === "number" && Number(el.year) < 3000,
      );
    }
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        style={{ height: "100%" }}
        center={position}
        zoom={this.state.zoom}
        ref="map"
      >
        <TileLayer
          url="https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}"
          attribution='Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
          minZoom={1}
          maxZoom={8}
          format="jpg"
          time=""
          tilematrixset="GoogleMapsCompatible_Level"
        />
        {observations &&
          observations.map(obs => (
            <Marker key={obs.id} position={obs.coord}>
              <Popup observation={obs} />
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
)(
  sizeMe({
    monitorHeight: true,
  })(GeoDisplay),
);
