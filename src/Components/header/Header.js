import React from 'react';
import './headerstyle.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div class="logos">
                <img src="" alt=""></img>
            </div>
            
            <div class="header">
            
            <nav>
                <a href="/Home"> <Link to="/Home">Home</Link></a>
                <a href="/Profile"><Link to="/Profile">Profile</Link></a>
                <a href="/Manage">Manage Inventory</a>
            </nav>
            
            </div>
        </div>
    );
};

export default Header;