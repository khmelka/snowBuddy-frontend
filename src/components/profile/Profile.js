import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const Profile = ({profile: {sport, skilevel, snblevel, bio, location, facebook, instagram, user: {name, avatar}}, auth}) => {
    return <div className="myProfile">
            <div style={{textAlign: 'center'}}>
              <img className="round-img my-1" src={avatar} alt=""/>
            </div>  

            <div>
              <div className="profileName">
                  <h1 className="large" style={{display: 'block'}}>{name}
                  

                  {facebook && (
                      <a href={facebook}>
                        <i className='fab fa-facebook' style={{marginLeft: '15px', color: 'white'}} />
                      </a>
                    )}

                  {instagram && (
                      <a href={instagram}>
                        <i className='fab fa-instagram' style={{marginLeft: '15px', color: 'white'}}/>
                      </a>
                    )}

                  </h1>
              </div>

              <div className="profileBottom">
                <div className="items">
                <h3>Sport: {sport}</h3>

                <h3>{skilevel && <span> Ski Level: {skilevel}</span>}</h3>

                <h3>{snblevel && <span> Snowboard Level: {snblevel}</span>}</h3>

                <h3>City: {location}</h3>
              </div>
              
              <div className="bio">
              {bio && (
                  <Fragment>
                    <h3> Bio</h3>
                    <h3>{bio}</h3>
                    <div className='line' />
                  </Fragment>
                  )}
            
              </div>
              </div>
            </div>
        </div>
    
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Profile
