import React, { Component } from 'react';
import {editPassword, getPassword} from '../store/password/password.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'

class Updatepassword extends Component {
  constructor () {
    super()
    this.state = {
      url:'',
      username: '',
      password: '',
      UpdatedAt: moment().format('LLLL'),
    }
  }
  componentDidMount (){
    this.props.getPassword()
    // console.log(this.props.password)
  }
  editPassword = (payload) => {
    this.props.editPassword(payload)
    // this.props.history.push('/password-manager')  
  }
  handlechange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    let stateData = this.props.password  
    // console.log(stateData)
    let filterPwd = stateData.data.filter(
      (pwd) => {
        return pwd.key = this.props.match.params.key
      }
    )
    return (
      <div className="container bgcontainer">
      {filterPwd.map(pass=>{
      <div key={pass.key}>
      <form>
        <div className="form-group row">
        <legend className="text-center header">Edit Password</legend>
          <label className="col-2 offset-md-2">URL</label>
          <div className="col-md-4">
            <input name="url" onChange= {this.handlechange} className="form-control" type="text"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 offset-md-2">Username</label>
          <div className="col-md-4">
            <input name="username" onChange= {this.handlechange} className="form-control" type="text" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 offset-md-2">password</label>
          <div className="col-md-4">
            <input name="password" onChange= {this.handlechange} className="form-control" type="text"  />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 offset-md-2"></label>
          <div className="col-md-1">
            <button className="btn btn-primary" type='button'  onClick={()=>this.editPassword(this.state)}> Save</button>
          </div>
        </div>
      </form>
        </div>
       })}
    </div>
    )
  }
};

const mapStateToProps = (state) => ({
  password: state.password
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPassword,
  editPassword
}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps)(Updatepassword)
