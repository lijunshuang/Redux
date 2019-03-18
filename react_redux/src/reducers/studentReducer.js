import {
    ADDSTUDENT,
    DELSTUDENT
} from '../constants'
const init = {
    students: [{
            id: 1,
            name: '小明',
            age: 18,
            sex: '男'
        },
        {
            id: 2,
            name: '小华',
            age: 19,
            sex: '女'
        }
    ]
}

export default (state = init, action) => {
    switch (action.type) {
        case ADDSTUDENT:
            return {
                students: [
                    ...state.students,
                    {
                        id: Math.random(),
                        name: action.name,
                        age: action.age,
                        sex: action.sex
                    }
                ]
            }
        case DELSTUDENT:
            return {
                students: state.students.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}