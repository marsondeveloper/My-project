import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



class Dialogs extends React.Component {

     state = this.props.dialogsPage;

     dialogsElement = this.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
     messagesElement = this.state.messages.map(m => <Message message={m.message} key={m.id}  />);
     newMessageBody = this.state.newMessageBody;


      onSendMessageClick = () => {
          this.props.sendMessage();
      };

      onNewMessageChange = (e) => {   //функция, которая отправляет в store через textarea(без неё не вводится в поле)//e-объект события
          let body = e.target.value;       //в target находится textarea
          this.props.updateNewMessageBody(body); //изменение нового сообщения
      };




    render(){

        return (

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {this.dialogsElement}
                </div>
                <div className={s.messages}>
                    <div>{this.messagesElement}</div>
                    <div>
                        <div><textarea value={this.newMessageBody} onChange={this.onNewMessageChange} placeholder='Enter your message' /> </div>
                        <div><button onClick={this.onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dialogs;


