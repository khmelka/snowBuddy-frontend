import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Profiles = ({profile: {user: {_id, name, avatar}, sport, location}}) => {
    return (
        <div className="profile">
            <img src={avatar} alt="" className="round-img" style={{marginLeft: '25px'}}/> 
            <div style={{color:'blue'}}>
                <h3 >{name}</h3>

                <div className="profileItems">
                    <h5 style={{textTransform: 'uppercase'}}>Sport</h5> <h5>{sport}</h5>
                </div>

                <div className="profileItems">
                    <h5 style={{textTransform: 'uppercase'}}>City</h5> <h5>{location}</h5>
                </div>
            </div>

            <Link to={`/profile/${_id}`} className='btn btn-primary' style={{display: 'inline-table',width: '230px', marginTop: '5px'}}>
                View Profile
            </Link>
            
        </div>

    )
}

Profiles.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Profiles
