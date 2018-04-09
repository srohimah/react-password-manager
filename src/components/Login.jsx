import React, { Component } from 'react';
import {addUser} from '../store/user/user.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Validator from '../components/Validator'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
      this.props.addUser({
        username: this.state.username,
        password: this.state.password,
      })
    this.props.history.push('/')  
  }
  handlechange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <div className="container" style={{marginTop: 20 + 'px'}}>
        <div className="row">
          <div className="col col-md-5 form">
            <form>
              <div className="form-group row">
                <legend className="text-center header">Sign In</legend>
                <label className="col-3">username</label>
                <div className="col-md-9">
                  <input name="url" onChange= {this.handlechange} className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3">password</label>
                <div className="col-md-9">
                  <input name="username" onChange= {this.handlechange} className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2"></label>
                <div className="col-md-1">
                  <button type="submit" className="btn btn-primary">Signin</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col col-md-6 offset-md-1 form">
            <form onSubmit= {this.handleSubmit}>
              <legend className="text-center header">Sign Up</legend>
              <div className="form-group row">
                <label className="col-2">username</label>
                <div className="col-md-10">
                  <input name="username" onChange= {this.handlechange} className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2">password</label>
                <div className="col-md-10">
                  <input name="password" onChange= {this.handlechange} className="form-control" type="text" />
                </div>
              </div>
              <Validator pass={this.state.password}/>
              <div className="form-group row">
                <label className="col-2"></label>
                <div className="col-md-1">
                  <button type="submit" className="btn btn-primary">SignUp</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addUser
}, dispatch)

export default connect (null, mapDispatchToProps)(Login)
