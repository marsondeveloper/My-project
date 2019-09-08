const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Marlen'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Gera'},
        {id: 4, name: 'Aleksandr'},
        {id: 5, name: 'Maksim'},
        {id: 6, name: 'Viktoria'},
        {id: 7, name: 'Vasiliy'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is your name'},
        {id: 3, message: 'YO!'},
        {id: 4, message: 'YO:)'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'I love girls'},
        {id: 7, message: 'kilya'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:                         //пользователь нажимает кнопку отправить и выводится на экран
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 9, message: body}]      //добавляем новое сообщение в объект message
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;
