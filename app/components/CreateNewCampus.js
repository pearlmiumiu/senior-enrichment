import React, {Component} from 'react';
import store from '../store';
import campusReducer from '../reducers/campusReducer';
import {createTheCampus, writeCampusName, createCampus} from '../reducers/campusReducer';


export default class CreateNewCampus extends Component {

	constructor(){
		super();
		this.state=store.getState();

		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.unsubscribe=store.subscribe(()=> this.setState(store.getState()));
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	handleChange(event){
		store.dispatch(writeCampusName(event.target.value));

	}
    
    handleSubmit(event){
    	
    	event.preventDefault();
    	store.dispatch(createCampus({name:this.state.campusReducer.newCampusNameEntry}));
    }

	


	render() {
		return(
			<form id='new-campus-form' onSubmit={this.handleSubmit} >
				<div className='input-group input-group-lg'>
					<input
						onChange={this.handleChange}
						className='form-control'
						type='text'
						
						
					/>
					<span className='input-group-btn'>
					 <button className='btn btn-default' type='submit'> </button>
					</span>
				</div>
			</form>
	    )
	}



}