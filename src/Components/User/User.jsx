import React from 'react';
import UserShort from "./UserShort";
import UserDetails from "./UserDetails";

const User = ({user, isShortUsers = false, isAddLink = false}) => {
    return isShortUsers ? <UserShort user={user} isHasDetailsLink={isAddLink}/> : <UserDetails user={user}/>
};

export default User;