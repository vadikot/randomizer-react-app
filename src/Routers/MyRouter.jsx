import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import AboutUser from "../Pages/AboutUser";
import ByGender from "../Pages/ByGender";
import RandomUser from "../Pages/RandomUser";
import AboutUs from "../Pages/AboutUs";

const MyRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/random-user'} element={<RandomUser/>}/>
            <Route exact={true} path={'/:gender/about-user'} element={<AboutUser/>}/>
            <Route exact={true} path={'/:gender'} element={<ByGender/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};

export default MyRouter;