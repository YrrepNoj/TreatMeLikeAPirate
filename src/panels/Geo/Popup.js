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
    padding: "15px",
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
          <p style={{ marginTop: 0 }}>
            <span style={styles.strong}>Type: </span>
            {observation.type}

            <br />
            <span style={styles.strong}>Year: </span>
            {observation.year}

            <br />
            <br />
            <span style={styles.strong}>About: </span>
            <br />
            {observation.description}
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default CustomPopup;
