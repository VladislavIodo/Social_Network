import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from  './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   
    let dialogsElements = props.dialogsDate.map(d => <DialogItem id={d.id} name={d.name}  /> );
 
    let messageElements = props.messagesDate.map(m => <Message message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
}
export default Dialogs;