import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import{connect} from 'react-redux'
import {login} from '../../redux/actions/auth'

const Login = ({login, isAuthenticated, user}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {email, password} = formData

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value })

    const onSubmit = async (event) => {
        event.preventDefault()
        login(email, password)
      
  }
//   console.log("from login", user && user.name)
    if (isAuthenticated) {
        return <Redirect to="/homepage" />
    }

    return (
        <div className="signinMainContainer">
            <div className="row">
                <div className="col-md-4 col-md-4 col-md-12">
                    <form className="form-container" onSubmit ={(event) => onSubmit(event)}>
                        <div className="mainname">
                            <h1 className="name">Welcome to Ski Buddy!</h1>
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                name="email" 
                                value={email}
                                onChange={(event) => onChange(event)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                name="password" 
                                value={password}
                                onChange={(event) => onChange(event)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                     </form>
                  </div>
             </div>
         </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {login})(Login)
