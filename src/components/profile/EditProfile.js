import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile, getCurrentProfile} from '../../redux/actions/profile'
 
const EditProfile = ({profile: {profile, loading}, createProfile, getCurrentProfile, history}) => {
    const [formData, setFormData] = useState({
        sport: '',
        skilevel: '',
        snblevel: '',
        location: '',
        bio: '',
        facebook: '',
        instagram: ''
    })

    // const [displaySocialInput, toggleSocialInput] = useState(false)
    useEffect(() => {
        getCurrentProfile()
        setFormData({
    //check if profile is loading and there is no data => null
            sport: loading || !profile.sport ? '' : profile.sport,
            skilevel: loading || !profile.skilevel ? '' : profile.skilevel,
            snblevel: loading || !profile.snblevel ? '' : profile.snblevel,
            bio: loading || !profile.bio ? '' : profile.bio,
            location: loading || !profile.location ? '' : profile.location,
            facebook: loading || !profile.facebook ? '' : profile.facebook,
            instagram: loading || !profile.instagram ? '' : profile.instagram,

        })
    }, [loading, getCurrentProfile])

    const { sport,
            skilevel,
            snblevel,
            location,
            bio,
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
        <h2 style={{textAlign:'center'}}>
                    Edit Your Profile
                </h2>
        {/* <small>* = required field</small> */}
        
            <div className="form-group">
                <select name="sport" value={sport} onChange={(event) => onChange(event)}>
                    <option value="0">Select Your Preference</option>
                    <option value="Ski">Ski</option>
                    <option value="Snowboard">Snowboard</option>
                    <option value="Ski and Snowboard">Ski and Snowboard</option>
                </select>
            </div>

            <div className="form-group">
                <select name="skilevel" value={skilevel} onChange={(event) => onChange(event)}>
                    <option value="0">Select Ski Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
            <div className="form-group">
                <select name="snblevel" value={snblevel} onChange={(event) => onChange(event)}>
                    <option value="0">Select Snowboard Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>

            <div className="form-group">
                <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={(event) => onChange(event)}></textarea>
            </div>

            <div className="form-group">
                <input type="text" placeholder="City" name="location" value = {location} onChange={(event) => onChange(event)} />
               
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

