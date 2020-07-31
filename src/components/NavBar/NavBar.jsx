import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a href="/Profile">Profile</a></div>
            <div className={`${classes.item} ${classes.active}`}><a href="/Dialogs">Message</a></div>
            <div className={classes.item}><a href="/News">News</a></div>
            <div className={classes.item}><a href="/Music">Music</a></div>
            <div className={classes.item}><a href="/Settings">Settings</a></div>
        </nav>
    );
}
export default NavBar;