import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../redux/actions/auth'

export const Navbar = ({auth: {isAuthenticated, loading, user}, logout}) => {
  
    return (
        <nav className="navbar">
            {/* <div className="navbar-brand">
                <img src="./000592-Skiing-Logo-design-free-logos-02.png" id="skiLogoNav" alt="ski logo"/><p className="titleNameNav"></p>
            </div> */}
            { !loading && isAuthenticated ? (
            <Fragment> 
                <div className = "navLinks" >
                    <ul>
                        <li><Link to='/map'>Resort Map</Link></li>
                        <li><Link to={`/profile/${user && user._id}`} className="c"> {user && user.name.trim().split(' ')[0]}</Link></li>
                        <li><Link to='/profiles'>All Profiles</Link></li>
                        <li><Link to='/homepage' className="c"> Profile Actions </Link></li>
                        <li><Link to='/' onClick={logout}><span className="hide-sm">Logout</span></Link></li>

                    </ul>
                </div>
           </Fragment>) : null}
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