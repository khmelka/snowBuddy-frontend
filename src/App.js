import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Intro from './components/Intro'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import {Provider} from 'react-redux'
import store from './store'


const App = () => {
  return (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path = '/' component={Intro} />
        <section className="container">
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/homepage" component={HomePage} />
            </Switch>
          </section>
      </Router>
     </Fragment>
    </Provider>
  )
}

export default App;
