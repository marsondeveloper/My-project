import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reduce";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../api/api";




class ProfileContainer extends React.Component {


    componentDidMount() {
debugger;
       let userId = this.props.match.params.userId;


        if(!userId){
            userId = 2;
        }
       fetch(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            /*profileAPI.getProfile(this.userId)*/ .then(response => {this.props.setUserProfile(response.data);

        })
    }

    render() {
        return (
          <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

 let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);