import React from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.header__body}>
                    <Link to="/" className={classes.logo}>
                        <img src={logo} alt="LOGO"></img>
                    </Link>
                    <ul className={classes.links}>
                        <li>
                            <NavLink className={classes.link} to="/">
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.link} to="/add-users">
                                AddUsers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.link} to="/news">
                                News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.link} to="/add-news">
                                AddNews
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
