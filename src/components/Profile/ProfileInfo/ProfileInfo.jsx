import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div><img src='https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg' alt=""></img></div>
            <div className={classes.descriptionBlock}>ava + description</div>
        </div>
    );
}
export default ProfileInfo;