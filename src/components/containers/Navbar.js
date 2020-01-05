import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../redux/actions/auth'

export const Navbar = ({auth: {isAuthenticated, loading, user}, logout}) => {
    const authLinks = (
        <ul>
           <li><Link to='/profiles'>All Profiles</Link></li>
           <li><Link to='/dashboard'>Map</Link></li>
           <li><Link to='/' onClick={logout}><span className="hide-sm">Logout</span></Link></li>
           <li><Link to={`/profile/${user && user._id}`} className="circleName">{user && user.name}</Link></li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <Link to='#!'>Developer</Link> 
        </ul>
    )
    return (
        <nav className="navbar bg-dark">
            <div className="navbar-end">
                <img src="./000592-Skiing-Logo-design-free-logos-02.png" width="60" height="50" alt="ski logo"/><p className="titleName">Ski Buddy</p>
            </div>
            { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)