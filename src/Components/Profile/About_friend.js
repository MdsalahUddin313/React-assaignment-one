import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
  import fakedata from '../FakeData/fakedata'
const About_friend = (props) => {
    
     const {Description}=useParams(); 
     const persons=fakedata.find(pd=>pd.key===Description);
      console.log(persons);
    return (
        <div>
             <div>
             
     </div>
        </div>
    );
};

export default About_friend;


// {
//     <h1 class="header_part">Your <span class="lighter">Product</span> </h1>
//     <div>
//     <img class="images" src={Product_details.img} alt=""></img>
//     </div>
//     <div class="center">
//     <h2 class="name">{Product_details.name}</h2>
//      <h4>Seller:{Product_details.seller}</h4>
//      <h4>Shipping:{Product_details.shipping}</h4>
//      <p>Star:{Product_details.star}</p>
//      <p>Star Count:{Product_details.starCount}</p>
//      <p>Stock:{Product_details.stock}</p>
//      <p>Whole Price:{Product_details.wholePrice}</p>
//      <p>Price:{Product_details.price}</p>
//      </div>
//     <div class="center">
//      <button class="btn"><a href={Product_details.url}>Visit Sites</a></button>
//      </div>
//}