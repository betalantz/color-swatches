import React from "react"
import Swatch from "./Swatch"
import '../css/ColorList.css'



export default class ColorList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: [],
            currentPage: 1,
            swatchesPerPage: 12
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(event) {
        this.setState({currentPage: Number(event.target.id)})
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
        const { colors, currentPage, swatchesPerPage } = this.state;
    
        // Logic for displaying current swatches
        const idxOfLastSwatch = currentPage * swatchesPerPage
        const idxOfFirstSwatch = idxOfLastSwatch - swatchesPerPage
        const currentSwatches = colors.slice(idxOfFirstSwatch, idxOfLastSwatch)

        const renderSwatches = currentSwatches.map(this.renderSwatch)

        // Logic for displaying page numbers
        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(colors.length / swatchesPerPage); i++) {
            pageNumbers.push(i)
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                {number}
                </li>
            )
        })

        return <div className="color-list">
            <ul>
                { renderSwatches }
            </ul>
            <ul id="page-numbers">
                { renderPageNumbers }
            </ul>
        </div>
    }   
}