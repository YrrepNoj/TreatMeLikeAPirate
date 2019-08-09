import React from "react";
import Timeline from "react-visjs-timeline";
import { findDOMNode } from "react-dom";

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
    return <Timeline options={options} />;
  }

  componentDidMount() {
    findDOMNode(this).children[0].style.visibility = "visible";
  }
}

export default MyTimeline;
