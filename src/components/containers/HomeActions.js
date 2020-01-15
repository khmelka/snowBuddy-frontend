import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {deleteAccount} from '../../redux/actions/profile'
import {connect} from 'react-redux'

const HomeActions = ({deleteAccount}) => {
    return (
        <div className="dash-buttons">
            <Link to="edit-profile" className="btn btn-light" style={{backgroundColor: 'white'}}>
                 Edit Profile
            </Link>
            <button className='btn btn-danger' style={{marginLeft: '20px'}} onClick={() => deleteAccount()}>
               Delete Account
            </button>
        </div>
    )
}

HomeActions.propTypes = {
    deleteAccount: PropTypes.func.isRequired
}

export default connect(null, {deleteAccount})(HomeActions)
