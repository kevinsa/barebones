import { push } from 'react-router-redux';
import { LoginUser } from '../services/auth'
import Storage from '../services/storage'

export const LOGIN_REQUESTED = 'authentication/LOGIN_REQUETED'
export const LOGIN_COMPLETED = 'authentication/LOGIN_COMPLETED'
export const LOGIN_FAILED = 'authentication/LOGIN_FAILED'
export const LOGIN_HYDRATE = 'authentication/LOGIN_HYDRATE'
export const LOGOUT_COMPLETED = 'authentication/LOGOUT_COMPLETED'

const initialState = {
    authenticated: false,
    isAuthenticating: false,
    authenticatedUser: {},
    authenticationError: ''
}


export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
               isAuthenticating: true 
            }

        case LOGIN_COMPLETED:
            return {
                ...state,
                authenticated: true,
                isAuthenticating: !state.isAuthenticating,
                authenticatedUser: action.payload
            }
        
        case LOGIN_HYDRATE:
            return {
                ...state,
                authenticated: true,
                isAuthenticating: false,
                authenticatedUser: action.payload
            }
        
        case LOGIN_FAILED: 
            return {
                ...initialState,
                authenticationError: action.payload
            }

        case LOGOUT_COMPLETED:
            return {
                ...initialState
            }

        default:
            return state
    }
}

export const login = (user) => {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUESTED
        })

        return LoginUser(user.username, user.password).then((result) => {
            const authenticatedUser = {
                ...result
            }

            dispatch({
                type: LOGIN_COMPLETED,
                payload: authenticatedUser
            })

            //save the authorization token
            const storage = new Storage()
            storage.setAuthUser(authenticatedUser)

            //redirect
            dispatch(push('/'))
        }, (error) => {
            
            dispatch({
                type: LOGIN_FAILED,
                payload: error.message
            })
        })
    }
}

export const loginFromStorage = () => {
    return dispatch => {
        const storage = new Storage()
        const authenticatedUser = storage.getAuthUser()

        if(authenticatedUser && authenticatedUser.token !== null) {
            dispatch({
                type: LOGIN_HYDRATE,
                payload: authenticatedUser
            })

            //redirect
            dispatch(push('/'))
        }
    }
}

export const logout = () => {
    return dispatch => {
        const storage = new Storage()
        storage.removeAuthUser()

        dispatch({
            type: LOGOUT_COMPLETED,
        })

        //redirect
        dispatch(push('/login'))
    }
}