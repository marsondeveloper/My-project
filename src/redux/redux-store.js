import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reduce";
import authReducer from "./auth-reduce";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;