import React, { Fragment } from "react";
import "./hotfix.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { SET_INTERVAL_FILTER } from "../reducers/actions";

const styles = {
  wrapper: {
    backgroundColor: "#aaa",
    color: "#000",
    width: "100%",
    height: "100%",
  },
};
class MyTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startYear: "1999", endYear: "2019" };
  }
  handleSubmit = event => {
    this.setState({ startYear: this.state.startYearTemp });
    this.setState({ endYear: this.state.endYearTemp });
    this.props.setIntervalFilter([
      this.state.startYearTemp,
      this.state.endYearTemp,
    ]);
  };
  render() {
    const { startYear, endYear } = this.state;
    const options = {
      width: "100%",
      height: "100px",
      stack: false,
      showMajorLabels: true,
      // showCurrentTime: true,
      start: startYear,
      end: endYear,
      zoomMax: 100000000000000,
      type: "background",
      format: {
        minorLabels: {
          minute: "h:mma",
          hour: "ha",
        },
      },
    };
    return (
      <div style={styles.wrapper}>
        Start year:
        <TextField
          onChange={e => this.setState({ startYearTemp: e.target.value })}
        />
        End year:
        <TextField
          onChange={e => this.setState({ endYearTemp: e.target.value })}
        />
        <Button onClick={this.handleSubmit}>Update</Button>
        <Timeline options={options} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  setIntervalFilter: interval =>
    dispatch({ type: SET_INTERVAL_FILTER, interval: interval }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyTimeline);
