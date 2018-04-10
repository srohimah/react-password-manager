import React, { Component } from 'react';
import {signin} from '../store/user/user.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  handleSignin = (e) => {
    e.preventDefault()
    this.props.signin({
      username: this.state.username,
      password: this.state.password,
    })
    if(localStorage.getItem('user')){
      this.props.history.push('/password-manager')      
    }
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
          <div className="col col-md-6 offset-md-3 form">
            <form onSubmit= {this.handleSignin}>
              <div className="form-group row">
                <legend className="text-center header">Sign In</legend>
                <label className="col-3">username</label>
                <div className="col-md-9">
                  <input name="username" onChange= {this.handlechange} className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3">password</label>
                <div className="col-md-9">
                  <input name="password" onChange= {this.handlechange} className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3"></label>
                <div className="col-md-1">
                  <button type="submit" className="btn btn-primary">Signin</button>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 control">
                  <div>
                      Don't have an account! &nbsp;
                  <Link to="/signup">
                      Sign Up Here
                  </Link>
                  </div>
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
  signin
}, dispatch)

export default connect (null, mapDispatchToProps)(Login)
