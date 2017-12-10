/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import campusReducer from './campusReducer'



//const rootReducer = combineReducers({campusReducer, studentReducer})

const initialState = {}
 
const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};
 

export default rootReducer;


// //export action creators
// ///.....need add stuff