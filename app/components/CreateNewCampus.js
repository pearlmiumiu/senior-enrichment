// import React, {Component} from 'react';
// import store from '../store';
// import campusReducer from '../reducers/campusReducer';
// import { addNewCampus} from '../reducers/campusReducer';


// export default function createNewCampus(){

// 	constructor(){
// 		super()
// 		this.state=store.getState()

// 		this.handleChange=this.handleChange.bind(this)
// 		this.hanleSubmit=this.handleSubmit.bind(this)
// 	}

// 	componentDidMount(){
// 		this.unsubscribe=store.subscribe(()=> this.setState(store.getState()))
// 	}

// 	componentWillUnmount(){
// 		this.unsubscribe()
// 	}

// 	handleChange(event){
// 		const newCampusName=event.target.value
// 		const action=addCampus(newCampusName)
// 		store.dispatch(action)

// 	}
// 	handleSubmit(event){
// 		event.preventDefault()
// 		//const {campus}=this.state
// 		store.dispatch(addCampus(newCampusName))
// 		//store.dispatch()
// 	}


// 	render(){
// 		return(
// 			<form id='new-campus-form' onSubmit={this.handleSubmit}>
// 				<div className='input-group input-group-lg'>
// 					<input
// 						onChange={this.handleChange}
// 						className='form-control'
// 						type='text'
// 						planceholder='Enter New Campus Name Here!!!'
// 						value={this.state.name}
// 					/>
// 					<span className='input-group-btn'>
// 					 <button className='btn btn-default' type='submit'></button>
// 					</span>
// 				</div>
// 			</form>
// 	    )
// 	}



// }