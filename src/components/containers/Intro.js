import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Intro = props => {
    return (
        <section className="landing">
            <div className="overlay">
                <div className="landing-inner">
                <img src="./000592-Skiing-Logo-design-free-logos-02.png" id="skiLogoIntro" alt="ski logo"/>
                    <h1 className="mainTitle">
                        <span>S</span>
                        <span>k</span>
                        <span>i</span>
                        <span>B</span>
                        <span>u</span>
                        <span>d</span>
                    </h1>
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

Intro.propTypes = {

}

export default Intro
