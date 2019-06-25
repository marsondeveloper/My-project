import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




class Profile extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo />
                <MyPostsContainer store={this.props.store} />
            </div>
        );
    }
}

export default Profile;