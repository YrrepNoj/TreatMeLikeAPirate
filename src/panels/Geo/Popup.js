import React from "react";
import { Popup } from "react-leaflet";
import observableSymbol from "symbol-observable";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    height: "20px",
    backgroundColor: "#666",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "250px",
    height: "auto",
    minHeight: "250px",
    backgroundColor: "#ccc",
  },
};

const CustomPopup = props => {
  const { observation } = props;
  return (
    <Popup>
      <div style={styles.wrapper}>
        <div style={styles.header} />
        <div style={styles.content}>
          <p> {`Type: ${observation.type}`}</p>
        </div>
      </div>
    </Popup>
  );
};

export default CustomPopup;
