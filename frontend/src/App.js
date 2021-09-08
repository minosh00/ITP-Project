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

import Specialevents from './components/Specialevents';
import Loginpage from './components/Loginpage';
import middle from './components/Middle';
import Aboutus from './components/Aboutus';
import Adminspecialevent from './components/Adminspecialevent';
import Createspecialevent from './components/Createspecialevent';
import Editspecialevent from './components/Editspecialevent';
import Adminttrequest from './components/Adminttrequest';
import Adminalltimetables from './components/Adminalltimetables';
import Adminaddttable from './components/Adminaddttable';
import Admineditttables from './components/Admineditttables';
import Displaytimetables from './components/Displaytimetables';

import CreateSub from './components/CreateSub';
import SubHome from './components/SubHome';
import EditSub from './components/EditSub';
import SubDetails from './components/SubDetails';
import SubPdf from './components/SubPdf';
import EnrollmentHome from './components/EnrollmentHome';
import AddEnrollment from './components/AddEnrollment';


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

        <Route path="/middle" exact component={middle}></Route>
        <Route path="/special" component={Specialevents}></Route>
        <Route path="/adminspecialevent" component={Adminspecialevent}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/admin"  component={Loginpage}></Route>
        <Route path= "/addnewspecialevent" component={Createspecialevent}></Route>
        <Route path="/editspecialevent/:id" component={Editspecialevent}></Route> 
        <Route path="/Admintimetable" component={Adminttrequest}></Route>
        <Route path="/Admintimetable" component={Adminalltimetables}></Route>
        <Route path="/addnewtimetable" component={Adminaddttable}></Route>
        <Route path="/admineditttables/:id" component={Adminttrequest}></Route>
        <Route path="/admineditttables/:id" component={Admineditttables}></Route>
        <Route path="/displaytimetables" component={Displaytimetables}></Route>

        <Route path="/Adminsubhome" exact component={SubHome}></Route>
        <Route path="/add" component={CreateSub}></Route>
        <Route path="/edit/:id" component={EditSub}></Route>
        <Route path="/subject/:id" component={SubDetails}></Route>
        <Route path="/download/:id" component={SubPdf}></Route>
        <Route path="/enrollhome" component={EnrollmentHome}></Route>
        <Route path="/addEnrollment" component={AddEnrollment}></Route>
        
        <Route path="" component={Adminhomefooter}></Route>

      </div>
    </BrowserRouter>
    )
  }
}
