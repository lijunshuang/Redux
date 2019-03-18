import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delstudent } from '../../actions'

class Bd extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.students.map(item => <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.sex}</span>
              <span>{item.age}岁</span>
              <button onClick={()=>this.props.delstudent(item.id)}>删除</button>
            </li>)
          }
        </ul>
      </div>
    )
  }
}
const mapStateProps = (state) => {
  return {
    students:state.students.students
  }
}
const mapDispatchToProps = {delstudent}

export default connect(mapStateProps,mapDispatchToProps)(Bd)
