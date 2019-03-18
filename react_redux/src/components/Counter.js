import React, { Component } from "react";
import PropTypes from "prop-types";
import {increase, decrease } from '../actions'
import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super();
  }
  // static propTypes = {
  //   value: PropTypes.number.isRequired,
  //   increase: PropTypes.func.isRequired,
  //   decrease:PropTypes.func.isRequired
  // };
  render() {
    const { a,increase, decrease } = this.props;

    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">计数器：{a}</h1>
        <p className="text-center">
          <button onClick={increase} className="btn btn-primary mr-2">
            Increase 5
          </button>
          <button onClick={decrease} className="btn btn-danger mr-2">
            Decrease 1
          </button>
        </p>
      </div>
    );
  }
}
const mapStateProps = (state) => { 
  return {
    a :state.counter.a
  }
}
//如果没有action.js可以这样写
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase() { 
//       dispatch({type: "INCREASE",'num':5})
//     },
//     decrease() { 
//       dispatch({type: "DECREASE"})
//     }
//     // increase: (...args) =>dispatch(actions.INCREASE(...args))
//   }
// }

//有action.js时直接调用函数
const mapDispatchToProps = {increase, decrease}

//connect 函数装饰App组件
export default  connect(mapStateProps,mapDispatchToProps)(Counter);
