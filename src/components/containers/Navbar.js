import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../redux/actions/auth'

export const Navbar = ({auth: {isAuthenticated, loading, user}, logout}) => {
    const authLinks = (
        <ul>
           <li><Link to='/profiles'>All Profiles</Link></li>
           <li><Link to='/map'>Map</Link></li>
           <li><Link to='/' onClick={logout}><span className="hide-sm">Logout</span></Link></li>
           <li><Link to='/homepage' className="c">{user && user.name.trim().split(' ')[0]}</Link></li>
        </ul>
    )
    const guestLinks = (
        <ul>
            
        </ul>
    )
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="./000592-Skiing-Logo-design-free-logos-02.png" id="skiLogoNav" alt="ski logo"/><p className="titleNameNav"></p>
            </div>
            <div className="navbar-end">
            { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
            </div>
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