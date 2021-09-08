import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Homeheader from './components/Adminhomeheader';
import Homefooter from './components/Adminhomefooter';


export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>

      <Route path=""  component={Homeheader}></Route>
        






        
        <Route path="" component={Homefooter}></Route>

      </div>
    </BrowserRouter>
    )
  }
}
