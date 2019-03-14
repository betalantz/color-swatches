import React from "react"
import { Link } from "react-router-dom"
import { colorAPI } from "../stores/color_data"
import "../css/ColorDetail.css"


export default function ColorDetail(props) {
    const detail = colorAPI.get(
        parseInt(props.match.params.id, 10)
    )
    return <div>
        <h1>{detail.name}</h1>
        <div className="detail" style={{backgroundColor: detail.hexString}}></div>
        <h2>{detail.hexString}</h2>
        <Link to='/'>Clear</Link>
    </div>
}