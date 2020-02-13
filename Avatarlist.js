import React from 'react';

const Avatarlist = (props) => {
    return(
        <div className="styleimg ma4 dib pa4 ">
        <img src="https://joeschmoe.io/api/v1/shubham" alt="Avatar"></img>
        
    <h1>{props.name} </h1>
    <p> {props.work} </p>
    </div>
    )
}
export default Avatarlist;