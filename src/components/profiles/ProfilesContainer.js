import React, {Fragment, useEffect} from'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../containers/Spinner'
import {getAllProfiles} from '../../redux/actions/profile'
import Profiles from './Profiles'

const ProfilesContainer = ({getAllProfiles, profile: {profiles, loading}}) => {
    useEffect(() => {
        getAllProfiles()
    }, [])
    return <Fragment>
        { loading ? <Spinner /> : <Fragment>
            <div className="skipages">
            <h1>Find Your Snow Buddies!</h1>
            <p>Browse and connect with other athlets</p>
            </div>
            <div className="profiles">
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <Profiles key={profile._id} profile={profile}/>
                    ))
                ) : <h4>no profiles found</h4>}
            </div>
        </Fragment>}
    </Fragment>
}

ProfilesContainer.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getAllProfiles}) (ProfilesContainer)
