import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Homeheader from './components/Homeheader';
import Homefooter from './components/Homefooter';


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
