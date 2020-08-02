import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let postsDate = [
        { id: 1, message: 'Hi, how are you', likesCount: 132  },
        { id: 2, message: 'It is my first post', likesCount: 1029 }
    ];

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                <Post message={postsDate[0].message} likescount={postsDate[0].likesCount} />
                <Post message={postsDate[2].message} likescount={postsDate[1].likesCount} />
            </div>
        </div>
    );
}
export default MyPosts;