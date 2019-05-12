import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}  />);
    let newMessageBody = state.newMessageBody;




    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {   //функция, которая отправляет в store через textarea(без неё не вводится в поле)//e-объект события
        let body = e.target.value;       //в target находится textarea
        props.updateNewMessageBody(body); //изменение нового сообщения
    };
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message' /> </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;


