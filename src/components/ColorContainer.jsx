import React from "react";
import { Route, Switch } from "react-router-dom"
import ColorList from "./ColorList"
import ColorDetail from "./ColorDetail"
import { colorAPI } from "../stores/color_data"
import Sidebar from "react-sidebar"
import Panel from "./panel"
import SidebarContent from "./sidebar_content";
import logo from "../assets/logo.png"

const mql = window.matchMedia(`(min-width: 800px)`)

const styles = {
    contentHeaderMenuLink: {
      textDecoration: "none",
      color: "white",
      padding: 8
    },
    content: {
      padding: "16px"
    }
  };

export default class ColorContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            colors: [],
            sidebarDocked: mql.matches,
            sidebarOpen: true
        }
        this.onRandomClick = this.onRandomClick.bind(this)
        // this.onCatClick = this.onCatClick.bind(this)
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
        this.toggleOpen = this.toggleOpen.bind(this)
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open })
    }
    toggleOpen(ev) {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });

        if (ev) {
        ev.preventDefault();
        }
    }
    onRandomClick() {
        console.log('Random')
        function shuffle(arr) {
            for (let i = 0; i < arr.length -1; i++) {
                let j = i + Math.floor(Math.random()*(arr.length-i))
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
            return arr
        }
        this.setState({ colors: shuffle(this.state.colors)})
    }
    // onCatClick(cat) {
    //     console.log(cat);
    // }

    componentWillMount() {
        const colors = colorAPI.all();
        this.setState({ colors: colors })
        mql.addListener(this.mediaQueryChanged)
    }
    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged)
    }
    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
    }


    render() {
        const sidebar = <SidebarContent onRandClick={this.onRandomClick} onCatClick={this.onCatClick}/>

        const contentHeader = (
            <span>
                {!this.state.sidebarDocked && (
                <a
                    onClick={this.toggleOpen}
                    href="#"
                    style={styles.contentHeaderMenuLink}
                >
                    =
                </a>
                )}
                <img src={logo} alt="New Engen Logo"/>
            </span>
        );

        const sidebarProps = {
            sidebar,
            docked: this.state.sidebarDocked,
            open: this.state.sidebarOpen,
            onSetOpen: this.onSetSidebarOpen,
            sidebarClassName: 'sidebar'
        };

        return <div className="color-container">
            <Sidebar {...sidebarProps}>
                <Panel title={contentHeader}>
                    <div style={styles.content}>
                        <Switch>
                            <Route exact path='/' render={(props) => (
                                <ColorList colors={this.state.colors} />
                            )}/>
                            <Route path='/detail/:id' component={ColorDetail} />
                        </Switch>
                    </div>
                </Panel>
            </Sidebar>
        </div>
    }
}

