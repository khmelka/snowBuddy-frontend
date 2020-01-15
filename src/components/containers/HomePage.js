import React, {useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile, deleteAccount} from '../../redux/actions/profile'
import Spinner from './Spinner'
import HomeActions from './HomeActions'

const HomePage = ({getCurrentProfile, deleteAccount, auth: {user}, profile: {profile, loading}})=> {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    console.log("profile", profile)

    return  (
        <div className="settings">
        {loading && profile === null ? <Spinner /> : <Fragment>
            <h1 className="large" style={{textTransform: 'uppercase'}}>Profile Actions</h1>
            <h4 className="welcome" style={{paddingBottom: '25px'}}>
               {user && user.name}
            </h4>
        {profile !==null ? <Fragment><HomeActions /></Fragment> : <Fragment>
            <p>You don't have a profile yet, please create one!</p>
            <Link to='/create-profile' className='btn btn-primary my-1'> Create profile</Link>
            <button className='btn btn-danger' style={{marginLeft: '20px'}} onClick={() => deleteAccount()}>
              Delete Account
            </button>
            </Fragment> }
        </Fragment> }
    </div> 
    )
}

HomePage.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile        
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(HomePage)
