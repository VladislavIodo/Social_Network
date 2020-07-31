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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialoItem name="Vladislav" id="1" />
                <DialoItem name="Dmitriy" id="2" />
                <DialoItem name="Ylianna" id="3" />
                <DialoItem name="Mahail" id="4" />
                {/* <div className={classes.dialog}><NavLink to="/Dialogs/2">Ylia</NavLink></div>
                <div className={classes.dialog}><NavLink to="/Dialogs/3">Dima</NavLink></div>
                <div className={classes.dialog}><NavLink to="/Dialogs/4">Misha</NavLink></div> */}
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="How is your React)" />
                <Message message="Thanks, it is ok" />
            </div>
        </div>
    );
}
export default Dialogs;