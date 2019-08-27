import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {AddMessageReduxForm} from "./AddMessageForm/addMessageForm";
import {maxLengthCreator} from "../../utils/validators/validators";



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {   //функция, которая отправляет в store через textarea(без неё не вводится в поле)//e-объект события
        props.sendMessage(values.newMessageBody);
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    )
};




export default Dialogs;


