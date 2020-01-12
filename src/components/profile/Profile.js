import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({profile: {sport, skilevel, snblevel, bio, location, facebook, instagram, user: {name, avatar}}, auth}) => {
    return <div className="myProfile">
            <div style={{textAlign: 'center'}}>
              <img className="round-img my-1" src={avatar} alt=""/>
            </div>  
            <h1 className="large">{name}</h1>
            <p>Sport: {sport}</p>
            <p>Ski Level: {skilevel}</p>
            <p>Snowboard Level: {snblevel}</p>
            <p>My Bio: {bio}</p>
            <p>City: {location}</p>
            <p><a href={facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                    </a></p>
            <p>{instagram}</p>
          
        </div>
    
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Profile
