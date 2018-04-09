import React, { Component } from 'react';
import {editPassword, getPassword} from '../store/password/password.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Updatepassword extends Component {
  constructor () {
    super()
    this.state = {
      url:'',
      username: '',
      password: '',
    }
  }
  componentDidMount (){
    this.props.getPassword()
    let id = this.props.password.data.findIndex(el => {
      return el.key === this.props.match.params.key
    })
    let currentState = this.props.password.data[id]
    if (currentState) {
      this.setState({
        url: currentState.url,
        username: currentState.username,
        password: currentState.password,
        createdAt: currentState.createdAt
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
      this.props.editPassword(this.props.match.params.key, {
        url: this.state.url,
        username: this.state.username,
        password: this.state.password,
        createdAt: this.state.createdAt
      })
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
      <form  onSubmit={this.handleSubmit}>
      <div>
        <div className="form-group row">
        <legend className="text-center header">Edit Password</legend>
          <label className="col-2 offset-md-2">URL</label>
          <div className="col-md-4">
            <input name="url" onChange= {this.handlechange} className="form-control" value={this.state.url} type="text"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 offset-md-2">Username</label>
          <div className="col-md-4">
            <input name="username" onChange= {this.handlechange} className="form-control" value={this.state.username} type="text" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 offset-md-2">password</label>
          <div className="col-md-4">
            <input name="password" onChange= {this.handlechange} className="form-control" value={this.state.password} type="text"  />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 offset-md-2"></label>
          <div className="col-md-1">
            <button className="btn btn-primary" type='submit'> Save</button>
          </div>
        </div>
        </div>
      </form>
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
