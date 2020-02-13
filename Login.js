import React, { Component } from 'react';
import Test from './Test'
import './Login.css';




class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: null,
            password:''
           
          
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit =(event) => {
        event.preventDefault()
        console.log("Final data is", this.state.email);
      
       
       
    }
    handleSubmit =(event) => {
        event.preventDefault()
        console.log("Final data is", this.state.password);
      
       
       
    }
    handleChange =(event) => {
        
        this.setState({
           email: event.target.value
          
         })
    }
    handleChange =(event) => {
        
        this.setState({
           password: event.target.value
          
         })
    }
    render() {
        
        return(
            <div className="login ma4 dib pa4 ">
             <form>
                    <div className="form-group">
                        <h1 className="name1">Welcome To Login Page</h1>
                        
                        <label  className="form-group">Email</label>
                        <input className='name' type="email" id="email" name="email"
                        
                         onChange={(e) => this.handleChange(e)}
                        value={ this.state.email } /><br></br>
                        <label  className="form-group">Password</label>
                        <input type="password" id="pwd" name="pwd" ></input>
                    </div>  
                   
             </form>  
             
             <button  className="form-group" onClick = {this.handleSubmit} > submit </button>
             
            </div>

        )
    }


}
    
export default Login;