import React, { Component } from "react";
import PropTypes from "prop-types";
import User from './components/User'
import Counter from './components/Counter'
import StudentList from './components/studentList'
class App extends Component {
  constructor(props) {
    super();
  }
  // static propTypes = {
  //   value: PropTypes.number.isRequired,
  //   increase: PropTypes.func.isRequired,
  //   decrease:PropTypes.func.isRequired
  // };
  render() {
    return (
      <div className="container">
        <Counter />
        <h1 style={{textAlign:"center"}}>获取用户</h1>
        <User />
        <h1 style={{ textAlign: "center" }}>学生列表</h1>
        <StudentList/>
      </div>
    );
  }
}

export default  App
