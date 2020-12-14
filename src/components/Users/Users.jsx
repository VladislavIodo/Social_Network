import React from "react";
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://pbs.twimg.com/profile_images/1903539737/image.jpg',
                    followed: true,
                    fullName: 'Vladislav',
                    status: 'I love my wife',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://c.files.bbci.co.uk/65AD/production/_114492062_mediaitem114492061.jpg',
                    followed: false,
                    fullName: 'Ylianna',
                    status: 'You very beautiful man',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://i2-prod.mirror.co.uk/incoming/article13868526.ece/ALTERNATES/s1200d/1_GMB-Richard-Hammond.jpg',
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'Fun',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users;