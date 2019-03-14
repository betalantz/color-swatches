import React from "react"
import Panel from "./panel"
import logo from "../assets/logo.png"

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "#D6D8D8"
  }
};

const SidebarContent = props => {
    const style = props.style
        ? { ...styles.sidebar, ...props.style }
        : styles.sidebar;   

    const categories = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

    const links = []

    categories.map((cat) => (
        <div key={cat} className="sideLink" style={styles.sidebarLink}>cat</div>
    ))

    return (
        <Panel src={logo} style={style}>
            <div style={styles.content}>
                {links}
            </div>
        </Panel>
    );
}
export default SidebarContent