import React from "react"
import Swatch from "./Swatch"
import '../css/ColorList.css'

const mql = window.matchMedia(`(min-width: 768px)`)

export default class ColorList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: [],
            currentPage: 1,
            swatchesPerPage: 12,
            isWideScreen: mql.matches
        }
        this.handleClick = this.handleClick.bind(this)
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    }
    mediaQueryChanged() {
        let displayNum = mql.matches ? 12 : 9
        this.setState({ isWideScreen: mql.matches, swatchesPerPage: displayNum })
    }
    handleClick(event) {
        this.setState({currentPage: Number(event.target.id)})
    }
    componentWillMount() {
        mql.addListener(this.mediaQueryChanged)
    }

    componentDidMount() {
        this.setState({
            colors: this.props.colors
        })
        mql.removeListener(this.mediaQueryChanged)
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