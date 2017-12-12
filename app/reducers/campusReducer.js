import axios from 'axios';

//initial state
const initialState={
	campuses:[],
    newCampusNameEntry:''
	


};

//action type for campus
const GOT_ALL_CAMPUSES_FROM_SERVER='GOT_ALL_CAMPUSES_FROM_SERVER';
const WRITE_CAMPUS_NAME='WRITE_CAMPUS_NAME';
const CREATE_CAMPUS = 'CREATE_CAMPUS';



//action creator
export function gotAllCampusesFromServer(campuses){
	return {type: GOT_ALL_CAMPUSES_FROM_SERVER,  campuses}
}

export function writeCampusName(newCampusName){
	return {
		type: 'WRITE_CAMPUS_NAME',
		newCampusName
	};
}


export function createTheCampus(campus) {
  
  return {
    type: CREATE_CAMPUS,
    campuses: [campus]
  };
}



//thunk creator
//thunk creator for allCampuses
export function fetchCampuses(){
	return function thunk(dispatch){
		return axios.get('/api/campuses')
					.then(res=>res.data)
					.then(campuses=>{
						const action=gotAllCampusesFromServer(campuses)
						dispatch(action);
					});
	};
};



//thunk creator for addCampus

export function createCampus(campus) {
  return function thunk(dispatch) {  	
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then( newCampus => {
        const action = createTheCampus(newCampus);
        dispatch(action);
      } );
  };
};





//reducer

export default function reducer(state=initialState, action) {
	switch(action.type){
		case GOT_ALL_CAMPUSES_FROM_SERVER:
				return  Object.assign({}, state, {campuses:action.campuses});
		case WRITE_CAMPUS_NAME:
				return Object.assign({}, state, {newCampusNameEntry:action.newCampusName});
		case CREATE_CAMPUS:
				
      			return Object.assign({}, state, {campuses: state.campuses.concat(action.campuses)});
	
		default:
			return state;

	}
};