import { combineReducers } from 'redux';
import course from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    course,
    authors
})

export default rootReducer;