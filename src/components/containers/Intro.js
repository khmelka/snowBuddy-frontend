import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const MainPage = props => {
    return (
        <section className="landing">
            <div className="overlay">
                <div className="landing-inner">
                    <h1 className="x-large" style={{color:"blue"}}>Ski Buddy</h1>
                    <p className="lead">
                        Create an account, and connect with other skiers and see Resorts in Colorado 
                    </p>
                    <div className="buttons" style={{display: "grid"}}>
                        <Link to='/register' className = "btn btn-primary" style={{marginBottom: "10px"}} > Register</Link>
                        <Link to='/login' className = "btn btn-primary">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

MainPage.propTypes = {

}

export default MainPage
