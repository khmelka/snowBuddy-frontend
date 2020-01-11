import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile, getCurrentProfile} from '../../redux/actions/profile'
 
const EditProfile = ({profile: {profile, loading}, createProfile, getCurrentProfile, history}) => {
    const [formData, setFormData] = useState({
        level: '',
        about: '',
        status: '',
        titles: '',
        competitions: '',
        facebook: '',
        instagram: ''
    })

    // const [displaySocialInput, toggleSocialInput] = useState(false)
    useEffect(() => {
        getCurrentProfile()
        setFormData({
    //check if profile is loading and there is no data => null
            level: loading || !profile.level ? '' : profile.level,
            about: loading || !profile.about ? '' : profile.about,
            status: loading || !profile.status ? '' : profile.status,
            titles: loading || !profile.titles ? '' : profile.titles,
            competitions: loading || !profile.competitions ? '' : profile.competitions,
            facebook: loading || !profile.facebook ? '' : profile.facebook,
            instagram: loading || !profile.instagram ? '' : profile.instagram,

        })
    }, [loading, getCurrentProfile])

    const { level,
            about,
            status,
            titles,
            competitions,
            facebook,
            instagram
        } = formData

        const onChange = event => setFormData({...formData, [event.target.name]: event.target.value  })

        const onSubmit = event => {
            event.preventDefault()
            createProfile(formData, history, true)
        }

    return (
        <div className="profileFormMainContainer">
        <div className="col-md-4 col-md-4 col-md-12">

        <form className="profileForm" onSubmit={(event) => onSubmit(event)}>
                <h1 className="lead">
                    <i className="fas fa-user" style={{zoom: 1.6}}></i><b>Create Your Profile</b>
                </h1>
        <small>* = required field</small>
        
            <div className="form-group">
                <select name="level" value={level} onChange={(event) => onChange(event)}>
                    <option value="0">* Select Ski Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Professional">Professional</option>
                </select>
            </div>

            <div className="form-group">
                <textarea placeholder="A short bio of yourself" name="about" value={about} onChange={(event) => onChange(event)}></textarea>
            </div>

            {/* <div className="form-group">
                <select name="status" value={status} onChange={(event) => onChange(event)}>
                    <option value="student">* Select Ski Level</option>
                    <option value="instructor">Developer</option>
                </select>
                <small className="form-text"
                    >select your status</small
                >
            </div> */}
            <div className="form-group">
                <input type="text" placeholder="Titles" name="titles" value = {titles} onChange={(event) => onChange(event)} />
               
            </div>
            <div className="form-group">
                <input type="text" placeholder="Competitions" name="competitions" value = {competitions} onChange={(event) => onChange(event)}/>
                
            </div>

            <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x"></i>
                <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={(event) => onChange(event)}/>
            </div>

            <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x"></i>
                <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={(event) => onChange(event)}/>
            </div>
            
            <input type="submit" className="btn btn-primary my-1" />
            <Link className="btn btn-light my-1" to="/homepage">Go Back?</Link>
        </form>
        </div>
        </div>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile))

