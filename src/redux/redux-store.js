import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reduce";


let redusers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});
let store = createStore(redusers);

window.store = store;
export default store;