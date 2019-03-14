import React from "react"
import Panel from "./panel"
import Randomize from "./Randomize"
import logo from "../assets/logo.png"

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "10px 20px",
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
    for (let ind = 0; ind < categories.length; ind++) {
        links.push(
          <a key={ind} href="#" style={styles.sidebarLink}>
            {categories[ind]}
          </a>
        );
    }
    // const randomButton = ({onRanClick}) => {
    //     return <button className="rand-button" onClick={onRanClick} type="button">Random</button>
    // }

    return (
        <Panel src={logo} style={style}>
            <Randomize onRClick={props.onRandClick}/>
            <div style={styles.content}>
                {links}
            </div>
        </Panel>
    );
}
export default SidebarContent