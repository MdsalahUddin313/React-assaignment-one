import React from 'react';

const Friends_part = (props) => {

    const friends=props.Friends;
    console.log({friends});

    let total=0;

    let shipping=0;
            
    
    return (
        <div>
            <h3>Number Of Add Friends:<span class="light">{friends.length}</span></h3>
          
        </div>
    );
};

export default Friends_part;