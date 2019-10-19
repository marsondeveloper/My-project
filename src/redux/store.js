
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: '', likesCount: 12},
                {id: 2, message: 'И хорошего дня:)', likesCount: 18},
                {id: 3, message: 'What is yuor name?', likesCount: 14},
                {id: 4, message: 'I love girl', likesCount: 12},
                {id: 5, message: 'YO!', likesCount: 12}
            ],
            newPostText: 'I developer Marlen!'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Marlen'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Gera'},
                {id: 4, name: 'Aleksandr'},
                {id: 5, name: 'Tatyana'},
                {id: 6, name: 'Viktoria'},
                {id: 7, name: 'Vasiliy'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What is your name'},
                {id: 3, message: 'YO!'},
                {id: 4, message: 'YO:)'},
                {id: 5, message: 'Yo!'},
                {id: 6, message: 'I love girl'},
                {id: 7, message: 'Keith Flint forever'}
            ],
            newMessageBody: ''
        },
        sidebar: {
            friendsTop: [
                {id:2, name: 'Oleg'},
                {id:3, name: 'Gera'},
                {id:4, name: 'Aleksandr'}
            ]

        }

    },
    _callSubcriber() {
        console.log('state changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subcribe(observer) {
        this._callSubcriber = observer;    //наблюдатель
    },




    dispatch(action) {                    //отправка(метод dispacth) action-объект у которого есть свойство type
      this._state.profilePage = profileReducer(this._state.profilePage, action); //делегировали преобразование веток state с помощью reducer
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubcriber(this._state);//уведомили подписчика
      }
    };



export default store;
window.store = store;
// store - OOP