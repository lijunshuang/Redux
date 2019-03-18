const init = {
    a: 0
}

export default (state = init, action) => {
    switch (action.type) {
        case 'INCREASE':
            // throw new Error('error in INCREASE')
            return {
                a: action.num ? state.a + action.num:state.a + 1
            }
        case 'DECREASE':
        return {
            a: state.a - 1
        }
        default:
            return state;
    }
};