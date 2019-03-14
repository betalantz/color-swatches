import React from "react";
import { Route, Switch } from "react-router-dom"
import ColorList from "./ColorList"
import ColorDetail from "./ColorDetail"
import { colorAPI } from "../stores/color_data"


export default class ColorContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            colors: [],
            
        }
       
    }
    componentWillMount() {
        const colors = colorAPI.all();
        this.setState({ colors: colors })
    }

    render() {
        return <div className="color-container">
            <Switch>
                <Route exact path='/' render={(props) => (
                    <ColorList colors={this.state.colors} />
                )}/>
                <Route path='/detail/:id' component={ColorDetail} />
            </Switch>
        </div>

    }
}

