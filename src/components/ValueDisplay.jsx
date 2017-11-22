import React, { Component } from 'react';

class ValueDisplay extends Component{
    render(){
        return(
            <span style={{margin: '0 0 0 10px'}}>{this.props.displayValue}</span>
        );
    };
};
export default ValueDisplay;