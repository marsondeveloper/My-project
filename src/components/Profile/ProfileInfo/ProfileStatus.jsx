import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activatedEditMode = () => {
        this.setState({
            editMode: true
        });

    };
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return (
            <div style={{marginBottom: 40}}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedEditMode}><h2>{this.props.status || "----"}</h2></span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;