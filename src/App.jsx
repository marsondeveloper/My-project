import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musik from "./components/Musik/Musik";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";





const App = () => {

    return (

            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/profile' render={ () => <ProfileContainer /> } />
                    <Route path='/users' render={ () => <UsersContainer /> } />

                    <Route path='/news' render={News}/>
                    <Route path='/musik' render={Musik}/>
                    <Route path='/setting' render={Setting}/>
                </div>
            </div>

    )
};

export default App;

