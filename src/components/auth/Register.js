import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAlert} from '../../redux/actions/alert'
import {register} from '../../redux/actions/auth'

const Register = ({setAlert, register, isAuthenticated, user}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password,password2} = formData

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value })

    const onSubmit = async (event) => {
        event.preventDefault()
        if(password !== password2) {
           setAlert('Passwords do not match', 'bad')
        }
        else {
            register(({name, email, password}))
      }
  }
        if (isAuthenticated) {
        return <Redirect to="/homepage" />
        }

    return (
        <div className="signinMainContainer">
            <div className="row">
                <div className="col-md-4 col-md-4 col-md-12">
                    <form className="form-container" onSubmit={(event) => onSubmit(event)}>
                        <div className="mainname">
                            <h1 className="name">Welcome to Snow Buddy!</h1>
                        </div>
                        <div className="form-group">
                            <input 
                                type="name" 
                                className="form-control" 
                                placeholder="Name" 
                                name="name" 
                                value={name}
                                onChange ={event => onChange(event)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                name="email" 
                                value={email}
                                onChange ={event => onChange(event)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                name="password" 
                                value={password}
                                onChange ={event => onChange(event)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password" 
                                name="password2" 
                                value={password2}
                                onChange ={event => onChange(event)}
                            />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Register" />
                        <Link to='/login' className = "btn btn-primary" style={{float: 'right'}}>Login</Link>

                     </form>
                  </div>
             </div>
         </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {setAlert, register})(Register)
