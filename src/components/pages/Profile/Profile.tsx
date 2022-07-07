import React from 'react'
import classes from './Profile.module.scss'

const Profile = () => {
    const image = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg'

    return (
        <div style={{margin: '10px', display: 'grid', gridTemplateColumns: 'repeat(12,1fr)'}}>
            <div style={{gridColumnStart: 'span 2', padding: '10px'}}>
                <img src={image} className={classes.image}/>
            </div>
            <div style={{gridColumnStart: 'span 2', padding: '10px'}}>
                aaaa
            </div>
        </div>
    )
}

export default Profile
