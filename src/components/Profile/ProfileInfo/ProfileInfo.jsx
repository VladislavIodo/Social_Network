import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>
                    <div>
                        <b>Full name</b>: {props.profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {props.profile.lookingForAJob &&
                    <div>
                        <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                    </div>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;