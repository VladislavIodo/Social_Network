import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        // this.state.editMode = true;
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        // this.state.editMode = true;
        this.setState({
            editMode: false
        });
        this.props.updateStatus();
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;