import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Defect from '../src/assiment/detable.jsx';
import Project from '../src/assiment/protable.jsx';
import Employee from '../src/assiment/emptable.jsx';
import Back from '../src/assiment/addview.jsx'
// import Back2 from '../src/assiment/addview.jsx'
// import Back3 from '../src/assiment/addview.jsx'


import { BrowserRouter , Switch, Route } from "react-router-dom";


ReactDOM.render( <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/> 
        <Route path='/viewDefect' component={Defect}/>
        <Route path='/viewProject' component={Project}/>
        <Route path='/viewEmployee' component={Employee}/>
        <Route path='/back' component={Back}/>
                   
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

