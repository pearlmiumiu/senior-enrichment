import React, { Component } from 'react';
import { render } from 'react-dom';
import Campuses from './Campuses';
import store from '../store';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

//import {fetchCampuses} from '../reducers/campusReducer';
import campusReducer from '../reducers/campusReducer';
import {fetchCampuses} from '../reducers/campusReducer';

        
export default class Main extends Component {

      componentDidMount() {
        //console.log('comp')
        const campusThunk = fetchCampuses();
        //const studentThunk = fetchStudents();
        store.dispatch(campusThunk);
        //store.dispatch(studentThunk);
      }
   


    render() {
        
        return (
               <div>
                  <div className="homepage">
			        <h1>welcome to our page!!! </h1>
			      </div> 
                  <Switch>
                    <Route exact path='/campuses' component={Campuses}/>    
                  </Switch>
			   </div>
            
        )

    }
}