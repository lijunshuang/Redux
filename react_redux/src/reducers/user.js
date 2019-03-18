import {
    FETCH_USER_SUCCESS
} from '../constants'
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return action.user
        default:
            return state;
    }
};