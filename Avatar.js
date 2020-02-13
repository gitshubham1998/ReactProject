import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist'
import 'tachyons';

const Avatar = (props) => {
    return ( <div>
        <h1>welcome to my world</h1>
        
       <Avatarlist  id="" name="Shubham" work="web developer"/>
       <Avatarlist  id="" name="Angular" work="framework"/>
       <Avatarlist  id="" name="React" work="libriary"/>
       <Avatarlist  id="" name="JavaScript" work="Language"/>
    <button> subscribe </button>
    </div>
    )
}
export default Avatar;