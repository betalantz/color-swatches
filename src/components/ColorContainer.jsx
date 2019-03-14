import React from "react";

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
        return 
    }
}

