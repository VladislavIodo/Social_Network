import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    console.log(props.message);
    return (
        <div className={classes.item}>
            <div><img src="https://sun9-28.userapi.com/c856120/v856120747/15b21c/GRpFB8tZaJM.jpg" alt=''></img>
            {props.message}</div>
            <div><span>{props.likescount}</span></div>
        </div>
    );
}
export default Post;