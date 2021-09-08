import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Adminhomeheader from './components/Adminhomeheader';
import Adminhomefooter from './components/Adminhomefooter';
import AppliedAll from './components/AppliedAll'
import MainHome from './components/MainHome'
import adminViewProfile from './components/adminViewProfile'
import adminViewApplication from './components/adminViewApplication'
import updateAdmin from './components/updateAdmin'
import Apply from './components/Apply'


export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>

        <Route path=""  component={Adminhomeheader}></Route>
        <Route path="/staffhome"  component={MainHome}></Route>
        <Route path="/applications"  component={AppliedAll}></Route>
        <Route path="/update/:id"  component={updateAdmin}></Route>
        <Route path="/adminprofile/:id"  component={adminViewProfile}></Route>
        <Route path="/viewapplication/:id"  component={adminViewApplication}></Route> 
        <Route path="/apply"  component={Apply}></Route>   
        <Route path="" component={Adminhomefooter}></Route>

      </div>
    </BrowserRouter>
    )
  }
}
