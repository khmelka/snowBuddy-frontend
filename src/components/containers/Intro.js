import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Intro = props => {
    return (
        <section className="landing">
            <div className="overlay">
                <div className="landing-inner">
                    <div style={{marginTop: "25px"}}>
                        <img src="./000592-Skiing-Logo-design-free-logos-02.png" id="skiLogoIntro" alt="ski logo"/>
                        <img src="./snowboard.png" id="" alt="ski logo" style={{width: '400px'}}/>
                    </div>
                <div className="buttons" style={{display: "inline-grid", gridGap: '20px'}}>

                    <h1 className="mainTitle">
                        SNOW BUDDY
                    </h1>
                    {/* <p className="lead">
                        Create an account, and connect with other skiers and see Resorts in Colorado 
                    </p> */}
                        <Link to='/register' className = "btn btn-primary" > Register</Link>
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
