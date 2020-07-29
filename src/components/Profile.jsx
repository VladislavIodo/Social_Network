import React from 'react';
import classes from'./Profile.module.css';


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg'></img>
            </div>
            <div>ava + description</div>
            <div>
                My post
          <div>
                    new post
          </div>
                <div className={classes.posts}>
                    <div className={classes.item}>post 1</div>
                    <div className={classes.item}>post 2</div>
                </div>
            </div>
        </div>
    );
}
export default Profile;