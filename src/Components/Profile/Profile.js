import React from 'react';
import './profile.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
 


const Profiles = (props) => {

    const {key,username,first_name,title,picture,location,gender,email}=props.Profile;
    console.log(props.Profile.key);
    return (
        <div class="profile_components">
<div >
    <img class="Profile_picture text_part" src={picture} alt=""></img>     
    <div class="text_part">   
    {/* <h1>{key}</h1> */}
    <p class="name">{username}</p>
    <p>{title}.{first_name}</p>
    <p>{gender}</p>
    <p>email:{email}</p>
    <div class="buttons">
   <Link to={"/Profile/"+key}><button  onClick={()=>props.eventHandallerAddFriend(props.Profile)}>See Profile</button></Link>
    <button class="Friend_button" onClick={()=>props.eventHandallerAddFriend(props.Profile)}> <FontAwesomeIcon icon="faShoppingCart" ></FontAwesomeIcon>Add Friend</button>
    </div>
    </div>   
    </div>
        </div>
    );
};

export default Profiles;



/*

 <img src={picture} alt=""></img>
            <h1> {key}</h1>
            <h5>{title}  {first_name}</h5>
            <p>Gender ::{gender}</p>
            <p>Address: {location}</p>
            <p>Email:{email}</p>
            <button class="Friend_button" onClick={()=>props.eventHandallerAddFriend(props.Product)}>Add Friend</button>
            
*/