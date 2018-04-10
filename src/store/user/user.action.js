import {User} from '../../firebase'
import swal from 'sweetalert'

export const addUser = (payload) => {
  return dispatch => {
    User.push(payload)
  }
}

export const signin = (payload) => {
  console.log('payload',payload)
  return dispatch => {
    User.on('value', snapshot => {
      const dataUser = Object.keys(snapshot.val()).map(user => ({
        id: user,
        val: snapshot.val()[user]
      }))
      const filteruser = dataUser.filter(user => {
        return (user.val.username.toLowerCase() === payload.username.toLowerCase() &&
        user.val.password.toLowerCase() === payload.password.toLowerCase()
        )
      })
      if (filteruser.length === 0) {
          swal("Login Error", "Please fill email and password correctly.", "error");
      } else {
          localStorage.setItem('user',payload.username)
          swal("Login success!", "login successfully", "success");
      }
    })
  }
}
