import React from 'react';
import classes from './Post.module.css';


const Post = () => {
    return (
        <div className={classes.item}>
            <div><img src="https://sun9-28.userapi.com/c856120/v856120747/15b21c/GRpFB8tZaJM.jpg"></img>
            Post</div>
            <div><span>Like</span></div>
        </div>
    );
}
export default Post;