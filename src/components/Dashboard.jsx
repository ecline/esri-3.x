import React, { Component } from 'react';
import ValueDisplay from './ValueDisplay.jsx';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonCounter: 0
        };
        this.buttonHandler = this.buttonHandler.bind(this);
    };

    buttonHandler(event){
        this.setState({
            buttonCounter: this.state.buttonCounter += 1
        });
    };

    render(){
        return(
            <div id="dashboard">                
                <button style={{backgroundColor: 'rgba(255, 0 , 0, 1)'}} onClick={this.buttonHandler}>Button</button>
                <ValueDisplay displayValue={this.state.buttonCounter} />                
            </div>
        );
    };
};
export default Dashboard;