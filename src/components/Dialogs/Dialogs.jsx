import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialoItem = (props) => {
    let path = /Dialogs/ + ' ' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}><NavLink to={path}>{props.name}</NavLink></div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogsDate = [
        { id: 1, name: 'Vladislav' },
        { id: 2, name: 'Dmitriy' },
        { id: 2, name: 'Ylianna' },
        { id: 2, name: 'Mahail' }
    ];

    let messegesDate = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your React)' },
        { id: 2, message: 'Thanks, it is ok!' },
        { id: 2, message: 'Nice to meet you!' }
    ];
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialoItem name={dialogsDate[0].name} id={dialogsDate[0].id} />
                <DialoItem name={dialogsDate[1].name} id={dialogsDate[1].id} />
                <DialoItem name={dialogsDate[2].name} id={dialogsDate[2].id} />
                <DialoItem name={dialogsDate[3].name} id={dialogsDate[3].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messegesDate[0].message} />
                <Message message={messegesDate[1].message} />
                <Message message={messegesDate[2].message} />
                <Message message={messegesDate[3].message} />
            </div>
        </div>
    );
}
export default Dialogs;