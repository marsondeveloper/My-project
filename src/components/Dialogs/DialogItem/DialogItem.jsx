import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;