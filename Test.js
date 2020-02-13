import React, { Component } from 'react';
import Test from './Test'

class Teste extends Component{
    constructor(){
        super();

        this.state = {
            count: 0
        };
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    incrementCounter(){
        let count = this.state.count;

        this.setState({
           count: ++count
        })
    }
    render() {
        return(
            <div className="Test">
                {this.state.count}
            
            <button onClick={this.incrementCounter}> Addbutton</button>
            </div>
        );
    }
}
export default  Test;