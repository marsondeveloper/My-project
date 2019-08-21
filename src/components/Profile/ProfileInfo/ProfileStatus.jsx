import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: "Yo"

    };

    activatedEditMode() {
        debugger
        console.log("this:", this)
        this.setState({
            editMode: true

        });
    }
        deactivatedEditMode() {
        console.log("this:", this)
            this.setState({
                editMode: false

            });
    };

    render() {
        return (
            <div style={{marginBottom: 40}}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this. activatedEditMode.bind(this)}><h2>{this.props.status}</h2></span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;