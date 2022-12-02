import React from 'react';
import {useNavigate} from "react-router-dom";

const UserShort = ({user}) => {
    const navigate = useNavigate();

    return (
        <div className='user user__details'>
            <div className='user__name'>
                <img src={user.largeImgURL}/>
            </div>
            <div className='user__details'>
                <div className='field'>
                    <div className='field__name'>Email:</div>
                    <div className='field__value'>{user.email}</div>
                </div>
                <div className='field'>
                    <div className='field__name'>Phone:</div>
                    <div className='field__value'><a href={"tel:" + user.phone}>{user.phone}</a></div>
                </div>
                <div className='field'>
                    <div className='field__name'>Address:</div>
                    <div className='field__value'>
                        <div>{user.country}, {user.city}</div>
                        <div>{user.address}, {user.postcode}</div>
                    </div>
                </div>
                <div className='field'>
                    <div className='field__name'>age:</div>
                    <div className='field__value'>{user.age} yo</div>
                </div>
                <button className='button' onClick={() => navigate(-1)}>Back to previous page</button>
            </div>
        </div>
    );
};

export default UserShort;