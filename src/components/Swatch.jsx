import React from "react"
import "../css/Swatch.css"
import { Link } from "react-router-dom"

export default function Swatch(props) {
    return <li key={props.swatch.colorId} className="swatch">
        <Link to={`/detail/${props.swatch.colorId}`}>
            <div className="sample" style={{backgroundColor: props.swatch.hexString}}></div>
        </Link>
            <h2 className="label" style={{textDecoration: 'none'}}>{ props.swatch.hexString }</h2>
    </li>
}