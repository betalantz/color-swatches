import React from "react"
import Panel from "./panel"
import Randomize from "./Randomize"
import logo from "../assets/logo.png"

const styles = {
  sidebar: {
    width: 320,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "9px 20px",
    color: "#363C3C",
    textDecoration: "none",
    font: "28px Source Serif Pro, serif"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "#D6D8D8"
  },
  button: {
    margin: "10px 0 20px 20px"
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
          <a key={ind} href="#" style={styles.sidebarLink} onClick={() => props.onCatClick(categories[ind])}>
            {categories[ind]}
          </a>
        );
    }
    // const randomButton = ({onRanClick}) => {
    //     return <button className="rand-button" onClick={onRanClick} type="button">Random</button>
    // }

    return (
        <Panel src={logo} style={style}>
            <div style={styles.content}>
                <Randomize style={styles.button} onRClick={props.onRandClick}/>
                {links}
            </div>
        </Panel>
    );
}
export default SidebarContent