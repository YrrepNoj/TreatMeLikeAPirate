import React, { Fragment } from "react";
import Timeline from "react-visjs-timeline";
import "./hotfix.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MyTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startYear: "1999", endYear: "2019" };
  }
  handleSubmit = event => {
    console.log(this.state.startYear);
    this.setState({ startYear: this.state.startYearTemp });
    console.log(this.state.endYear);
    this.setState({ endYear: this.state.endYearTemp });
    console.log(event);
  };
  render() {
    const { startYear, endYear } = this.state;
    console.log(startYear);
    console.log(endYear);
    const options = {
      width: "100vh",
      height: "100vh",
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
          hour: "ha"
        }
      }
    };
    return (
      <Fragment>
        Start year:{" "}
        <TextField
          onChange={e => this.setState({ startYearTemp: e.target.value })}
        />
        End year:{" "}
        <TextField
          onChange={e => this.setState({ endYearTemp: e.target.value })}
        />
        <Button onClick={this.handleSubmit}>Update</Button>
        <Timeline options={options} />
      </Fragment>
    );
  }
}

export default MyTimeline;
