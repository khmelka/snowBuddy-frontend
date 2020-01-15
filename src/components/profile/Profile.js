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
                <div className="itemsStyle">
                      <h3 style={{textDecoration: 'underline'}}>Sport </h3> {sport && <h4> {sport}</h4>}
                    </div>


                    <div className="itemsStyle">
                      {skilevel && (
                        <Fragment>
                          <h3 style={{textDecoration: 'underline'}}>  Ski Level </h3> 
                              <h4> {skilevel}</h4>
                        </Fragment>
                            )}
                    </div>

                    <div className="itemsStyle">
                      {snblevel && (
                        <Fragment>
                          <h3 style={{textDecoration: 'underline'}}>  Snowboard Level </h3> 
                              <h4> {snblevel}</h4>
                        </Fragment>
                            )}
                    </div>

                    <div className="itemsStyle">
                       <h3 style={{textDecoration: 'underline'}}>Location </h3> {location && <h4> {location}</h4>}
                    </div>
              </div>
              
              <div className="bio">
              {bio && (
                  <Fragment>
                    <h3 style={{textDecoration: 'underline'}}>About</h3>
                    <h4>{bio}</h4>
                    {/* <div className='line' /> */}
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
