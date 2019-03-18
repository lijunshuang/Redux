import React, { Component } from 'react'
import Hd from './Hd'
import Bd from './Bd'
export default class StudentList extends Component {
  render() {
    return (
      <div className="studentList">
            <Hd />
            <Bd />
      </div>
    )
  }
}
