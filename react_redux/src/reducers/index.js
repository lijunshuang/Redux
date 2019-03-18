import {
  combineReducers
} from "redux";
import counter from "./counterReducer";
import user from './user'
import students from './studentReducer'

export default combineReducers({
  counter,
  user,
  students
});