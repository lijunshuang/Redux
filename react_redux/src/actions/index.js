import axios from "axios";
import {
  INCREASE,
  DECREASE,
  FETCH_USER_SUCCESS,
  ADDSTUDENT,
  DELSTUDENT,
} from "../constants";

// 计数器的action
const increase = () => ({ type: INCREASE,num: 5})
const decrease = () => ({type: DECREASE})

//学生列表的action
const addstudent = (name, age, sex) => ({type: ADDSTUDENT,name,age,sex})
const delstudent = (id) => ({type: DELSTUDENT,id})

const get_user = () => (dispatch) => {
  axios.get("https://randomuser.me/api/")
    .then(res => {
      dispatch(fetch_user(res.data.results[0]));
    })
    .catch(error => {
      console.log(error);
    });
}

// const get_user = () => {
//   return dispatch => {
//     axios
//       .get("https://randomuser.me/api/")
//       .then(res => {
//         dispatch(fetch_user(res.data.results[0]));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };

const fetch_user = user => ({type: FETCH_USER_SUCCESS, user})
export {
  increase,
  decrease,
  get_user,
  fetch_user,
  addstudent,
  delstudent
};