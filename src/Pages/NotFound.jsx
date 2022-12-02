import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Sorry, page not found. <Link to='/'>Go back to home page</Link>
        </div>
    );
};

export default NotFound;