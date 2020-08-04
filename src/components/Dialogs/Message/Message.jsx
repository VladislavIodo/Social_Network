import React from 'react';
import classes from './../Dialogs.module.css';



const Message = (props) => {

let addText = React.createRef();
let write = ()=>{
    let writePost = addText.current.value;
    alert(writePost);
}
    return (
        <div className={classes.message}>
            <div>{props.message}</div>
        <div><textarea ref={addText}></textarea>
        <button onClick={write}>add</button>
        </div>
        </div>
    );
}

export default Message;