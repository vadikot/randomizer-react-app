import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <div className={classes.container}>
                    <span onClick={() => navigate('/')} className={classes.logo}>Randomizer</span>
                    <ul className={classes.menu}>
                        <li><Link to='/'>Home</Link></li>
                        <li>
                            <a href='#'
                               style={{cursor: 'default'}}
                               onClick={(e) => e.preventDefault()}
                            >By gender</a>
                            <ul className={classes.submenu}>
                                <li><Link
                                    to={'/male'}
                                    state={{
                                        previousPage: location.pathname,
                                    }}
                                >Men</Link></li>
                                <li><Link
                                    to='/female'
                                    state={{
                                        previousPage: location.pathname,
                                    }}
                                >Women</Link></li>
                                <li><Link
                                    to='/random'
                                    state={{
                                        previousPage: location.pathname,
                                    }}
                                >Random</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/random-user'>Random user</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;