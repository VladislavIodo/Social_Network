import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you' likescount='132' />
                <Post message='It is my first post' likescount='1029' />
            </div>
        </div>
    );
}
export default MyPosts;