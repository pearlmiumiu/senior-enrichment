import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createNewCampus from './CreateNewCampus';
import store from '../store';
import campusReducer from '../reducers/campusReducer';
import {fetchCampuses, addNewCampus} from '../reducers/campusReducer';

export default class Campuses extends Component {

  constructor() {
    super();
    this.state = store.getState();

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => this.setState(store.getState()) );

  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  
    
  
  render() {
    const campuses = this.state.campusReducer.campuses;
    //console.log("all campuses list here----!!!", campuses);
    return(
      <div className="all-campuses">
        <h3>HELLO ---------Campuses</h3>
        <div className="all-campus-container">
          {  
           campuses.map(campus => {
                  return (<div key={campus.id} className="each-campus-icon">
                    <Link to={`/campuses/${campus.id}`}>
                       <img src={campus.imageUrl} /> 
                      <h5>{campus.name}</h5>
                    </Link>
                  </div>)
                 })
          }
          
         
        </div>

        
        <div className="add-a-new-campus">
           <addNewCampus/>
        </div>

      </div>
    )
  }
}