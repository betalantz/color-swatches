import React from "react"


const styles = {
  root: {
    fontWeight: 300,
  },
  header: {
    backgroundColor: "#363C3C",
    padding: "16px 16px",
    fontSize: "1.5em",
    height: "100px",
  }
};

const Panel = props => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}>{props.title}</div>
      {props.children}
    </div>
  );
};

export default Panel