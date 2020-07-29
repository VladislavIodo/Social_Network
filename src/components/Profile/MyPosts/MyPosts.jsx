import React from 'react';
import classes from './MyPosts.module.css';


const MyPosts = () => {
    return (
        <div>My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.item}><img src="https://sun9-28.userapi.com/c856120/v856120747/15b21c/GRpFB8tZaJM.jpg"></img></div>
            <div className={classes.posts}>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    );
}
export default MyPosts;