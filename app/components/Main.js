import React, { Component } from 'react';
import { render } from 'react-dom';
import AllCampuses from './Campuses';
import store from '../store';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

//import {fetchCampuses} from '../reducers/campusReducer';

        
export default class Main extends Component {

      // componentDidMount() {
      //   console.log('comp')
      //   const campusThunk = fetchCampuses();
      //   const studentThunk = fetchStudents();
      //   store.dispatch(campusThunk);
      //   store.dispatch(studentThunk);
      // }
   


    render() {
        console.log('hello ------------');
        return (
               <div>
                  <div className="homepage">
			        <h1>welcome to our page!!! </h1>
			      </div> 
                  <Switch>
                    <Route exact path='/campuses' component={AllCampuses}/>    
                  </Switch>
			   </div>
            
        )

    }
}