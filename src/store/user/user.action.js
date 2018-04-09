import {User} from '../../firebase'
import { PASS_INVALID, PASS_VALID} from './user.actionType'

export const addUser = (payload) => {
  return dispatch => {
    User.push(payload)
  }
}


export function passValid () {
  return {
    type: PASS_VALID
  }
}

export function passInvalid () {
  return {
    type: PASS_INVALID
  }
}