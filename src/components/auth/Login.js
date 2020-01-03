import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Login = props => {
    return (
        <div className="signinMainContainer">
            <div className="row">
                <div className="col-md-4 col-md-4 col-md-12">
                    <form className="form-container" >
                        <div className="mainname">
                            <h1 className="name">Welcome to Ski Buddy!</h1>
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                name="email" 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                name="password" 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary"><Link to='/homepage'>Login</Link></button>
                     </form>
                  </div>
             </div>
         </div>
    )
}

Login.propTypes = {

}

export default Login
