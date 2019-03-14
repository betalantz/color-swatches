import React from "react"
import { Link } from "react-router-dom"
import { colorAPI } from "../stores/color_data"
import "../css/ColorDetail.css"


export default function ColorDetail(props) {
    const detail = colorAPI.get(
        parseInt(props.match.params.id, 10)
    )

    function ColorLuminance(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '')
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]
        }
        lum = lum || 0

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substring(i*2, (i*2)+2), 16)
            console.log(c);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16)
            console.log(c);
            rgb += c.padStart(2, "0")
            console.log(rgb);
        }
        return rgb
    }
    const tints = []
    for (let j = -2; j<=2; j++) {
        tints.push(ColorLuminance(detail.hexString, j*0.1))
    }
    const renderTints = tints.map(tint => {
        return <li className="tint-swatch">
            <div
                className="tint-sample"
                key={tint}
                number={tint}
                style={{backgroundColor: tint}}>
            </div>
            <div className="tint-label">
                {tint}
            </div>
        </li>
    })

    return <div className="detail">
        <div className="detail-swatch">
            <div className="detail-sample" style={{backgroundColor: detail.hexString}}></div>
            <div className="detail-label">{detail.hexString}</div>
        </div>
        <div className="tint-row">
            <ul>
            { renderTints }
            </ul>
        </div>
        <div className="clear-button"><Link to='/'><button>Clear</button></Link></div>
        
    </div>
}