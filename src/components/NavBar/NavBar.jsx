import React from 'react';
import classes from './NavBar.module.css';


// let classes = {
//     'nav': 'nav_1',
//     'item': 'item_1'
// }

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={`${classes.item} ${classes.active}`}><a>Message</a></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    );
}
export default NavBar;