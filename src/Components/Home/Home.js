import React from 'react';
import '../FakeData/fakedata'
import fakeData from '../FakeData/fakedata';
import  { useState } from 'react';
import Profile_men from '../FakeData/Profile_men';
import Profiles from '../Profile/Profile'
import Friends_part from '../Friends/Friends_part'
import fakedata from '../FakeData/fakedata'
import './home.css'

const Home = () => {

    const first2=fakedata.slice(0,15);
   // const [friends, setfriends] = useState(initialState)
     const [profile, setprofile] = useState(first2);
     const [Friends, setFriends] = useState([]);

   const eventHandallerAddFriend=(profiles)=>{
 
        const newFriend=[...Friends,profile];
        const similerProduct= newFriend.filter(pd=>pd.key===profile.key);
        const count=similerProduct.length;
       //addToDatabaseCart(friend.key,count);
        setFriends(newFriend);
 
   }
   
    return (
        <div class="home-container">
            
            <div class="profile_properties">

                {profile.map(pf=><Profiles
                    Profile={pf}
                    eventHandallerAddFriend={eventHandallerAddFriend}
                    
                    ></Profiles>)}
            </div>
            <div class="Add_friend_properties">
                <Friends_part Friends={Friends} ></Friends_part>
            </div>
        </div>
    );
};

export default Home;