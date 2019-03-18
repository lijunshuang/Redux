import React, { Component } from 'react'
import {get_user } from '../actions'
import { connect } from 'react-redux'

class User extends Component {
  constructor(props) { 
    super()
    
  }
  componentWillMount() { 
    this.props.get_user()
  }
  
  render() {
    const {get_user,user} = this.props
    return (
        <div className="container">
        <h1 className="jumbotron-heading text-center">
          <p>{user ? user.email : "loading"}</p>
            {/* <p>{user ? user.email : 'loading'}</p> */}
            <button className="btn btn-success mr-2" onClick={()=>get_user()}>
                Get random user
            </button>
            </h1>

        </div>
    )
  }
}
const mapStateProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = { get_user }

export default connect(mapStateProps, mapDispatchToProps)(User)