import React, { Component } from 'react';
import {getPassword, deletePassword} from '../store/password/password.action'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      search: '',
      type: 'password'
    }
  }
  updateSearch (event){
    this.setState({search: event.target.value})
  }
  showHide = (e) => {
    this.setState({
      type: this.state.type === 'password' ? 'input' : 'password'
    })  
  }
  componentDidMount (){
    this.props.getPassword()
  }
  deletePassword = (key) => {
    this.props.deletePassword(key)
  }
  handleEdit(id) {
    this.props.history.push(`/password-manager/edit/${id}`)
  }
  render() {
    let stateData = this.props.password
    let filterPwd = stateData.data.filter(
      (pwd) => {
        return pwd.url.indexOf(this.state.search) !== -1
      }
    )
    if(stateData.loading){
      return <img src="http://jarednewyork.nyc/images/loading.gif" alt="loading"/>
    }else if(stateData.error){
      return <h1>error</h1>
    }else{
      return (
        <div className="container" style={{marginTop: 20 + 'px'}} >
          <div className="form-group row">
            <div className="col-2">
              <Link to="/" ><button className="btn btn-primary">Add New Password</button></Link>
            </div>
            <div className="col-md-6 offset-md-4">
              <input className="form-control" type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="Type URL you want to search"/>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>CreatedAt</th>
                <th>UpdatedAt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {filterPwd.length===0 ? 
            <tr><td colSpan="6">No data</td></tr>
            : filterPwd.map(pass=>{
              return <tr key={pass.key}>
                        <td>{pass.url}</td>
                        <td>{pass.username}</td>
                        <td>
                        <input className="col-md-6" type={this.state.type} defaultValue={pass.password} style={{border:'none'}}/>
                          <span className="col-md-6" onClick={this.showHide}>{this.state.type === 'password' ? <button className="btn btn-outline-success">Show</button>:<button className="btn btn-outline-danger">Hide</button>}</span>
                        </td>
                        <td>{pass.createdAt}</td>
                        <td>{pass.updatedAt}</td>
                        <td>
                          <Link to={`/password-manager/edit/${pass.key}`}><button className="btn btn-outline-success"><i className="fas fa-edit"></i></button></Link>
                          {/* <button className="btn btn-outline-success" onClick={() => this.handleEdit(pass.key)}><i className="fas fa-edit"></i></button> */}
                          <button type="button" className="btn btn-outline-danger" onClick={()=>this.deletePassword(pass.key)}><i className="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>
            })}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  password: state.password
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPassword,
  deletePassword
}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps)(Home)