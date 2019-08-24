import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reduce";
import authReducer from "./auth-reduce";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";


let redusers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;