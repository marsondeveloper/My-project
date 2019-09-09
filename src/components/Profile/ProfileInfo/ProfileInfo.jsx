import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} style={{width: 200, height: 200}}/>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    {Object.keys(props.profile.contacts).map(el => (
                        <div key={el}>
                            {props.profile.contacts[el]}
                        </div>
                    ))}
                    {props.profile.lookingForAJob = "Looking for a job"} <img src='https://i.gifer.com/7tOI.gif'/>
                    <div>
                        {props.profile.fullName}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProfileInfo;