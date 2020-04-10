import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Detail } from './pages/details';
import {Home} from './pages/home';
import {Switch, Route} from 'react-router-dom';
import {NotFound} from './pages/NotFound';

export default class App extends Component
{ 
   render(){
      
     return (
     <div className="App">
       <Switch> 
         <Route exact path='/' component={Home}/>
         <Route path= '/detail/:id' component={Detail}/>
         <Route component={NotFound} /> 
      </Switch>
    </div>
  );
  } 
}
 