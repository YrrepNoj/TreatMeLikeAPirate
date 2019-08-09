import React, { Fragment } from "react";
import Timeline from "react-visjs-timeline";
import "./hotfix.css";
import MyDatePicker from "./../components/DatePicker";

class MyTimeline extends React.Component {
  render() {
    const options = {
      width: "100vh",
      height: "100vh",
      stack: false,
      showMajorLabels: true,
      showCurrentTime: true,
      zoomMin: 1000000,
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
        <Timeline options={options} />
      </Fragment>
    );
  }
}

export default MyTimeline;
