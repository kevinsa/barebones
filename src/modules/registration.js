import { createUserAccount } from '../services/register';

export const REGISTRATION_REQUESTED = 'registration/REGISTRATION_REQUESTED'
export const REGISTRATION_COMPLETED = 'registration/REGISTRATION_COMPLETED'
export const REGISTRATION_FAILED = 'registration/REGISTRATION_FALILED'

const initialState = {
  isRegistering: false,
  registrationError: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case REGISTRATION_REQUESTED:
      return {
        ...state,
        isRegistering: true,
      }

    case REGISTRATION_COMPLETED:
      return {
        ...state,
        isRegistering: !state.isRegistering,
      }

    case REGISTRATION_FAILED:
      return {
        ...state,
        isRegistering: false,
        registrationError: action.payload
      }

    default:
      return state
  }
}

export const registerUser = (userData) => {
  return dispatch => {
    dispatch({
      type: REGISTRATION_REQUESTED
    })

    return createUserAccount(userData).then((user) => {
      dispatch({
        type: REGISTRATION_COMPLETED,
        payload: user
      })

      return user

    }).catch((e) => {
      dispatch({
        type: REGISTRATION_FAILED,
        payload: e.message
      })
    })
  }
}