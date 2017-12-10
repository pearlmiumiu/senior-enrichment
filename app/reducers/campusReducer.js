import axios from 'axios'

//initial state
const initialState={
	campuses:[]
	// newCampus:''
	// // campusId: [],


}

//action type for campus
const GOT_ALL_CAMPUSES_FROM_SERVER='GOT_ALL_CAMPUSES_FROM_SERVER';

 const ADD_CAMPUS='ADD_CAMPUS';
// const UPDATE_CAMPUS='UPDATE_CAMPUS';
// const DELETE_CAMPUS='DELETE_CAMPUS';


//action creator
export function gotAllCampusesFromServer(campuses){
	return {type: GOT_ALL_CAMPUSES_FROM_SERVER, campuses}
}
// export function addCampus(newCampus){
// 	return {
// 		type:ADD_CAMPUS,
// 		newCampus: newCampus
// 	}
// }

// export function updateCampus(campus){
// 	return {
// 		type: UPDATE_CAMPUS,
//         campuse
// 	}

// }

// export function deleteCampus(id){
// 	return {
//        type: DELETE_CAMPUS,
//        campusId:id
// 	}
// }

//thunk creator
//thunk creator for allCampuses
export function fetchCampuses(){
	return function thunk(dispatch){
		return axios.get('/api/campuses')
					.then(res=>res.data)
					.then(campuses=>{
						const action=gotAllCampusesFromServer(campuses)
						dispatch(action)
					})
	}
}



//thunk creator for addCampus
// export function addNewCampus(campusData){
// 	return function thunk(dispatch){
// 		return axios.post('/api/campuses/{campusId}')
// 					.then(res=>res.data)
// 					.then(newCampus=>{
// 						const action=addCampus(newCampus)
// 						dispath(action)
// 					})
// 	}
// }


// //thunk creator for updateCampus
// export function editCampus(id, campus){
// 	return function thunk(dispatch){
// 		return axios.put(`/api/campus/${id}`,updateCampusData)
// 					.then(res=>res.data)
// 					.then(updatedCampus=>{
// 						const action=updateCampus(updatedCampus)
// 						dispatch(action)
// 					})
// 	}
// }

// //thunk creator for deleteCampus
// export function deleteACampus(campus){
// 	return function thunk(dispatch){
// 		return axios.delete(`/api/campus/${id}`)
// 					.then(res=>res.data)
// 					.then(deletedCampus=>{
// 						const action=deleteCampus(id)
// 						dispatch(action)
// 					})
// 	}
// }


//reducer

export default function reducer(state=initialState, action){
	switch(action.type){
		case GOT_ALL_CAMPUSES_FROM_SERVER:
				return  Object.assign({}, state, {campuses:action.campuses})
				//return {...state, campuses: action.campuses}
		case ADD_CAMPUS:
				return Object.assign({}, state, newCampus:action.newCampus)
		// 		//return {...state, newCampus:action.newCampus}
		// case UPDATE_CAMPUS:
  //               return initialState.map(campus=>{
  //               	if (+campus.id===+action.campuses.id) return action.campus
  //               		return campus
  //               })
		// case DELETE_CAMPUS:
		// 		return Object.assign({}, state, campus:action.id)

		default:
			return state

	}
}