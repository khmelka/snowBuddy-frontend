import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Register = props => {
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
                                type="name" 
                                className="form-control" 
                                placeholder="Name" 
                                name="name" 
                            />
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
                        <div className="form-group">
                            <input 
                                type="password2" 
                                className="form-control" 
                                placeholder="Confirm Password" 
                                name="password2" 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary"><Link to='/homepage'>Register</Link></button>
                     </form>
                  </div>
             </div>
         </div>
    )
}

Register.propTypes = {

}

export default Register
