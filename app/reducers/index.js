/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import campusReducer from './campusReducer'



const rootReducer = combineReducers({campusReducer, studentReducer})



export default rootReducer;

