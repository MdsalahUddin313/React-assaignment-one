import React, { Component } from 'react'
import Header from '../header/Header'
import 'react-router-dom'
import '../Home/Home'
import Profiles from '../Profile/Profile'
import Error from '../Error_pages/Error'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Home from '../Home/Home'
import About_friend from '../Profile/About_friend'


export default class Index extends Component {
    render() {
        return (
            <div>
                
                <Router>
                <div>
                <Header></Header>
                </div>

               <Switch>
               
                <Route path='/Home'>
                   <Home></Home>
                </Route>
                <Route path='/Profile/:Description'>
                   <About_friend></About_friend>
                </Route>
                <Route path='*'>
                    <Error></Error>
                </Route>
                <Route path='/'>
                   <Home></Home>
                </Route>
                </Switch>
                </Router>
              
            </div>
        )
    }
}
