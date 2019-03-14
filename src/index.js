import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom"
import ColorContainer from "./components/ColorContainer"
import './index.css';

ReactDOM.render((
    <Router>
        <ColorContainer />
    </Router>
), document.getElementById('root'));
