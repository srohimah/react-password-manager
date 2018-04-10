import React, { Component } from 'react';
import {addUser} from '../store/user/user.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  
  
  lowerCase () {
    return (this.state.password.match(/^(?=.*[a-z])/))
  }
  
  upperCase () {
    return (this.state.password.match(/^(?=.*[A-Z])/)) 
  }
  
  haveNum () {
    return (this.state.password.match(/^(?=.*[0-9])/))
  }
  
  length () {
    return (this.state.password.length > 7) ? true : false
  }

  haveSym () {
    return (this.state.password.match(/^(?=.*[_\W])/))
  }

  all() {
    return (this.length() && this.upperCase() && this.lowerCase() && this.haveNum() && this.haveSym())
  }
  
  handleSignup = (e) => {
    e.preventDefault()
    if(!this.all()){
      swal("error", "Please fill the form with right requierments!", "error");
    }else{
      this.props.addUser({
        username: this.state.username,
        password: this.state.password,
      })
    swal("success", "Your acount created!", "success");
    this.props.history.push('/')  
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
         <form onSubmit= {this.handleSignup}>
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
           <div className="form-group row">
             <label className="col-2"></label>
             <div className="col-md-1">
               <input type="submit" className={"btn btn-primary "+ (this.all() ? "active" : "disabled")} value="signup"/>
             </div>
           </div>
           <div>
             <div style={{marginTop:'30px'}}>
             <h5>Password must be requirements</h5>
               <ul className="text-left" style={{listStyle: "none"}}>
                 <li className={"alert alert-dismissible " + (this.lowerCase() ? "alert-success" : "alert-danger") }>{ this.lowerCase() ? '[ ✅ ]': '[ ❌ ]'} At least <strong>one letter</strong></li>
                 <li className={"alert alert-dismissible " + (this.upperCase() ? "alert-success" : "alert-danger") }> { this.upperCase() ? '[ ✅ ]': '[ ❌ ]'} At least <strong>one capital letter</strong></li>
                 <li className={"alert alert-dismissible " + (this.haveNum() ? "alert-success" : "alert-danger") }>{ this.haveNum() ? '[ ✅ ]': '[ ❌ ]'} At least <strong>one number</strong></li>
                 <li className={"alert alert-dismissible " + (this.length() ? "alert-success" : "alert-danger") }>{ this.length() ? '[ ✅ ]': '[ ❌ ]'} Be at least <strong>8 characters</strong></li>
                 <li className={"alert alert-dismissible " + (this.haveSym() ? "alert-success" : "alert-danger") }> { this.haveSym() ? '[ ✅ ]': '[ ❌ ]'} be<strong> use [~,!,@,#,$,%,^,&,*,-,=,.,;,']</strong></li>
               </ul>
             </div>
           </div>
           <div className="form-group">
                <div className="col-md-12 control">
                  <div>
                      Already have an account! &nbsp;
                  <Link to="/">
                      Login Here
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
  addUser,
}, dispatch)

export default connect (null, mapDispatchToProps)(Login)
