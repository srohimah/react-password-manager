import {FETCH_PASSWORD, LOADING_PASSWORD, ERROR_PASSWORD} from './password.actionType'

const initialState = {
  loading: false,
  error: false,
  data : []
}

const reducers = (state={ ...initialState}, action) => {
  switch (action.type) {
    case FETCH_PASSWORD :
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case LOADING_PASSWORD :
    return {
      ...state,
      loading: true
    }
    case ERROR_PASSWORD : 
    return {
      ...state,
      loading: false,
      error: true
    }
    default:
     return state
  }
}

export default reducers