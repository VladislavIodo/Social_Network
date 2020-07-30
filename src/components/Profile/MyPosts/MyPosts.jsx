import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you' likescount='132' />
                <Post message='It is my first post' likescount='1029' />
            </div>
        </div>
    );
}
export default MyPosts;