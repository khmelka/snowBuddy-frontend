import React, {Fragment, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Intro from './components/containers/Intro'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/containers/Navbar'
import HomePage from './components/containers/HomePage';
import PrivateRoute from './components/route/PrivateRoute'
import Alert from './components/containers/Alert'
import {Provider} from 'react-redux'
import store from './redux/store'
import {loadUser}from './redux/actions/auth'
import Profile from './components/profile/Profile'


const App = ({user}) => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  console.log("user", user)
  return (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path = '/' component={Intro} />
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/homepage" component={HomePage} />
                {/* <PrivateRoute exact path={`/profile/${user && user._id}`} component={Profile} /> */}
            </Switch>
          </section>
      </Router>
     </Fragment>
    </Provider>
  )
}

export default App;
