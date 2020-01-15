import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../containers/Spinner'
import {getProfileById} from '../../redux/actions/profile'
import Profile from './Profile'

const ProfileContainer = ({getProfileById, profile: {profile, loading}, auth: {user}, match}) => {
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById,match.params.id])
    console.log(loading, 'loading from profile')
    return  <Fragment>
        { profile === null ? 
            <div className="settings"><h3>You have not created a profile yet!</h3> <br></br>
            <Link to='/create-profile' className='btn btn-primary my-1'> Create profile</Link>
            </div> :
        loading ? <Spinner /> : 
            <Fragment>
                 <div>
                    <Profile profile = {profile} />
                </div>
                
                {/* {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id &&
                    (<Link to="/edit-profile" className="btn btn-light">
                        <i className="fas fa-user-circle text-primary"></i> Edit Profile
                    </Link>)
                } */}
                
        </Fragment>} 
    </Fragment> 
}

ProfileContainer.propTypes = { 
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect (mapStateToProps, {getProfileById})(ProfileContainer)

