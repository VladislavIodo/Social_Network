import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <div><img src='https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg'></img></div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
}
export default Profile;