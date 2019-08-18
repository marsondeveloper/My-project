import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musik from "./components/Musik/Musik";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";





const App = () => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
                    <Route path='/users' render={ () => <UsersContainer/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/musik' render={Musik}/>
                    <Route path='/setting' render={Setting}/>
                    <Route path='/Login' render={ () => <LoginPage />}/>
                </div>
            </div>
    )
};

export default App;

