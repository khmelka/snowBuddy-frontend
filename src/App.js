import React, {Fragment, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './redux/store'
import {connect} from 'react-redux'
import setAuthToken from './token/setAuthToken'
import Intro from './components/containers/Intro'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/containers/Navbar'
import HomePage from './components/containers/HomePage';
import PrivateRoute from './components/route/PrivateRoute'
import Alert from './components/containers/Alert'
import {loadUser}from './redux/actions/auth'
import CreateProfile from './components/profile/CreateProfile'
import EditProfile from './components/profile/EditProfile'
import MapContainer from './components/map/MapContainer'
import ProfilesContainer from './components/profiles/ProfilesContainer'
import ProfileContainer from './components/profile/ProfileContainer'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = ({auth:{user}}) => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Fragment>
      <Router>
        {user ? <Navbar /> : null}
        {user ? null : <Route exact path = '/' component={Intro} />}
        <section className="container">
            <Alert />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/homepage" component={HomePage} />
                <PrivateRoute exact path="/profile/:id" component={ProfileContainer} />
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                <PrivateRoute exact path="/map" component={MapContainer} />
                <PrivateRoute exact path="/profiles" component={ProfilesContainer} />

            </Switch>  
          </section>
      </Router>
     </Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
