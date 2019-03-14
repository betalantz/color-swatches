import React from "react"
import Swatch from "./Swatch"


export default class ColorList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: [],
        }
    }
    
    componentDidMount() {
        this.setState({
            colors: this.props.colors
        })
    }

    renderSwatch(swatch) {
        return <Swatch swatch={swatch} key={swatch.colorId}></Swatch>
    }

    render() {
        const colors = this.state.colors

        const renderSwatches = colors.map(this.renderSwatch)

        return <div className="color-list">
            <ul>
                { renderSwatches }
            </ul>
    
        </div>
    }   
}