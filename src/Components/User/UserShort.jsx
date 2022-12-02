import React from 'react';
import {Link} from "react-router-dom";

const UserShort = ({user, isHasDetailsLink = false}) => {

    return (
        <div className='user__wrap'>
            {
                isHasDetailsLink
                    ? <div className='user'>
                        <Link className='user__link'
                              key={user.id}
                              to={'/male/about-user'}
                              state={{
                                  user: user,
                              }}
                        >
                            <img src={user.smallImgURL}/>
                            <div>{user.firstName} {user.lastName}</div>
                        </Link>
                    </div>
                    : <div className='user'>
                        <img src={user.smallImgURL}/>
                        <div>{user.firstName} {user.lastName}</div>
                    </div>
            }
        </div>
    );
};

export default UserShort;