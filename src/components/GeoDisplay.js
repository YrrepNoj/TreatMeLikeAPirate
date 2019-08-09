import React from "react";
import { connect } from "react-redux";

class GeoDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.observations.map(obs => (
          <div>
            <p> {`type: ${obs.type}: ${obs.decription}`}</p>
          </div>
        ))}
      </div>
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
