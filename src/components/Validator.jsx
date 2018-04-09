import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import {passValid, passInvalid} from '../store/user/user.action'

class validator extends Component {
  
  all() {
    return (this.length() && this.upperCase() && this.lowerCase() && this.haveNum() && this.haveSym())
  }

  length () {
    return (this.props.pass.length > 8) ? true : false
  }

  upperCase () {
    return (this.props.pass.match(/^(?=.*[A-Z])/))
  }
  
  lowerCase () {
    return (this.props.pass.match(/^(?=.*[a-z])/))
  }

  haveNum () {
    return (this.props.pass.match(/^(?=.*[0-9])/))
  }

  haveSym () {
    return (this.props.pass.match(/^(?=.*[_\W])/))
  }

  // right () {
  //   this.props.passValid()
  // }

  // wrong () {
  //   this.props.passInvalid()
  // }
  
  
  render() {
    return (
      <div>
        <div className={"alert alert-dismissible "} style={{marginTop:'30px'}}>
        <h4>Password must be requirements</h4>
					<ul className="text-left" style={{listStyle: "none"}}>
						<li className={"alert alert-dismissible " + (this.lowerCase() ? "alert-success" : "alert-danger") }>{ this.lowerCase() ? '✅': '❌'} At least <strong>one letter</strong></li>
						<li className={"alert alert-dismissible " + (this.upperCase() ? "alert-success" : "alert-danger") }> { this.upperCase() ? '✅': '❌'} At least <strong>one capital letter</strong></li>
						<li className={"alert alert-dismissible " + (this.haveNum() ? "alert-success" : "alert-danger") }>{ this.haveNum() ? '✅': '❌'} At least <strong>one number</strong></li>
						<li className={"alert alert-dismissible " + (this.length() ? "alert-success" : "alert-danger") }>{ this.length() ? '✅': '❌'} Be at least <strong>8 characters</strong></li>
						<li className={"alert alert-dismissible " + (this.haveSym() ? "alert-success" : "alert-danger") }> { this.haveSym() ? '✅': '❌'} be<strong> use [~,!,@,#,$,%,^,&,*,-,=,.,;,']</strong></li>
					</ul>
        </div>
        {/* {this.all()? this.right() : this.wrong()} */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  // passValid,
  // passInvalid
},dispatch)

export default connect(null,mapDispatchToProps)(validator)