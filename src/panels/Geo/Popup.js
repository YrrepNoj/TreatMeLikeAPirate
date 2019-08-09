import React from "react";
import { Popup } from "react-leaflet";
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
    color: "#000",
  },
  strong: {
    fontWeight: "bold",
  },
};

const CustomPopup = props => {
  const { observation } = props;
  return (
    <Popup>
      <div style={styles.wrapper}>
        <div style={styles.header}>{observation.name}</div>
        <div style={styles.content}>
          <p>
            <span style={styles.strong}>Year: </span> {observation.year}
          </p>
          <p>
            <span style={styles.strong}>Type: </span> {observation.type}
          </p>
          <p>
            <span style={styles.strong}>Hynek score: </span> {observation.hynek}
          </p>
          <p>
            <span style={styles.strong}>About: </span> {observation.description}
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default CustomPopup;
