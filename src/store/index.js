import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import passReducer from './password/password.reducer'

const reducers = combineReducers({
  password : passReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store