import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action){
    console.log("11111111111111111111",action.courses);
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.course;

        default:
            return state;
    }
}

        //case types.CREATE_COURSE:
            //state.push(action.course);
            //return state;
            //return [...state, Object.assign({}, action.course)];