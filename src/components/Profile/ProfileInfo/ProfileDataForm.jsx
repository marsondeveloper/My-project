import React from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }

        <div>
            <button>Save</button>
        </div>
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional</b> : {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}</b> : {createField(key, "contacts." + key, [], Input)}
            </div>
        })}
        </div>

    </form>
};


const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
