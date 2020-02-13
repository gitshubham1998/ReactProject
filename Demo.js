import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';



class Demo extends Component{
    render(){
        return(
            <div class="mystyle_css">
                <h1>
                    this is my react first project  <br></br>
                     {this.props.name}
                </h1>
                <p>hello react world</p>
            </div>
        )
    }
}
export default Demo;