import React from 'react'

export default function deleteCampus(props){

	constructor(){
		super()
		this.state=store.getState()

		this.handleChange=this.handleChange.bind(this)
		this.hanleSubmit=this.handleSubmit.bind(this)
	}

	componentDidMount(){
		this.unsubscribe=store.subscribe(()=> this.setState(store.getState()))
	}

	componentWillUnmount(){
		this.unsubscribe()
	}

	handleChange(event){
		const newCampusName=event.target.value
		const action=addCampus(newCampusName)
		store.dispatch(action)

	}
	handleSubmit(event){
		event.preventDefault()
		const {campus}=this.state
		store.dispatch(addCampus(newCampusName))
		store.dispatch()
	}

}