import axios from 'axios'
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT, CLEAR_PROFILE} from './types'
import {setAlert} from './alert'
import setAuthToken from '../../token/setAuthToken'


//load authed User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/auth')
        dispatch ({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
           dispatch({
            type: AUTH_ERROR
        })
    }
}

//regitser User
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password})
    
    try {
        const res = await axios.post('/users', body, config)
        console.log("register data", body)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        // dispatch(loadUser())
    } catch (error) {
        console.error(error)
        const errors = error.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger ')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

//login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json",
        }
    }
    const body = JSON.stringify({email, password}) 
    
    try {
        const res = await axios.post('/auth', body, config)
        console.log("login data", body)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger ')))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

//logout
export const logout = () => dispatch => {
    dispatch({type:CLEAR_PROFILE})
    dispatch({type:LOGOUT})
}