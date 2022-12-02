import React from 'react';
import {useLocation} from "react-router-dom";
import User from "../Components/User/User";

const AboutUser = () => {
    const location = useLocation();
    const {user} = location.state;

    return (
        <div>
            <h1 className='list__title'>More about {user.firstName + ' ' + user.lastName}</h1>
            <User user={user}/>
        </div>
    );
};

export default AboutUser;