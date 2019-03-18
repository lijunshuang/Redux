import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addstudent } from '../../actions'
class Hd extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="姓名" ref="name" />
        <select name="sex" ref="sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
        {/* <input type="text" placeholder="性别" ref="sex" /> */}
        <input type="number" placeholder="年龄" ref="age" />
        <button
          className="btn btn-primary mr-2"
          onClick={() => this.props.addstudent(this.refs.name.value, this.refs.age.value, this.refs.sex.value)}
        >增加</button>
      </div>
    )
  }
}

const mapDispatchToProps = {addstudent}

export default connect(null,mapDispatchToProps)(Hd)