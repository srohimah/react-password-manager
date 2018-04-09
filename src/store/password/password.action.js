import {Password} from '../../firebase'
import {FETCH_PASSWORD, LOADING_PASSWORD, ERROR_PASSWORD} from './password.actionType'
import swal from 'sweetalert';
import moment from 'moment'

export const addPassword = (payload) => {
  return dispatch => {
    Password.push(payload)
  }
}
export const editPassword = (key, payload) => {
  return dispatch => {
    Password.child(key).set({
      ...payload,
      updatedAt: moment().format('LL'),      
    })
  }
}
export const getPassword = (payload) => {
  return dispatch => {
    dispatch(loadPasswordLoading())
    Password.on('value', snapshot => {
      let acc = []
      let data = snapshot.val()
      for(const key in data) {
        acc.push({key, ...data[key]})
      }
      dispatch(loadPasswordSuccess(acc))
    },err => {
      dispatch(loadPasswordError())
    }
  )
  }
}
export const deletePassword = (key) => {
  return dispatch => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Password.child(key).remove()        
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }
}


const loadPasswordSuccess = (payload) => ({
  type: FETCH_PASSWORD,
  payload: payload
})
const loadPasswordLoading = () => ({
  type: LOADING_PASSWORD,
})
const loadPasswordError = () => ({
  type: ERROR_PASSWORD,
})