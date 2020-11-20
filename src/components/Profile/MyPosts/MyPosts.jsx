import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/State";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likescount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;