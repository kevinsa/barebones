import { push } from 'react-router-redux';
import { LoginUser } from '../services/auth'

export const LOGIN_REQUESTED = 'authentication/LOGIN_REQUETED'
export const LOGIN_COMPLETED = 'authentication/LOGIN_COMPLETED'

const initialState = {
    authenticated: false,
    isAuthenticating: false,
    authenticatedUser: {}
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
            dispatch({
                type: LOGIN_COMPLETED,
                payload: {
                    id: result.id,
                    name: result.name,
                    username: result.username
                }
            })

            //redirect
            dispatch(push('/'))
        })
    }
}