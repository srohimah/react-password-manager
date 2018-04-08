import React, { Component } from 'react';
import {addPassword} from '../store/password/password.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'

class AddNewpassword extends Component {
  constructor () {
    super()
    this.state = {
      url:'',
      username: '',
      password: '',
      createdAt: moment().format('LLLL'),
    }
  }
  addPassword = (payload) => {
    this.props.addPassword(payload)
    this.props.history.push('/password-manager')  
  }
  handlechange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <div className="container bgcontainer">
      <form>
      <div className="form-group row">
      <legend className="text-center header">Add new Password</legend>
        <label className="col-2 offset-md-2">URL</label>
        <div className="col-md-4">
          <input name="url" onChange= {this.handlechange} className="form-control" type="text" />
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
          <input name="password" onChange= {this.handlechange} className="form-control" type="text" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-2 offset-md-2"></label>
        <div className="col-md-1">
          <button className="btn btn-primary" type='button'  onClick={()=>this.addPassword(this.state)}> Save</button>
        </div>
      </div>
      </form>
    </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addPassword
}, dispatch)

export default connect (null, mapDispatchToProps)(AddNewpassword)
