
import React, { Component } from 'react'
import logo from './Bright.png'

export default class Homeheader extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light ">
          <div   >
            <img src={logo} alt="logo" style={{ width: 600, marginTop: '20px', marginLeft: '20px' }} />

          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0 text-dark">
            <li className="nav-item">
              <b><a className="nav-link active " aria-current="page" href="/middle" style={{ fontSize: '23px', marginLeft: '20px' }}>Home</a></b>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/course" style={{ fontSize: '23px' }}>Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/allsubjects" style={{ fontSize: '23px' }}>Subjects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/lecturerpage" style={{ fontSize: '23px' }}>Lecturers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/" style={{ fontSize: '23px' }}>Library</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/special" style={{ fontSize: '23px' }}>Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/displaytimetables" style={{ fontSize: '23px' }}>TimeTables</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/notices" style={{ fontSize: '23px' }}>Notices</a>
            </li>
            <li style={{ marginLeft: '1180px' }}>
              <div class="btn-group">
                <button type="button" class="btn btn-danger">Request</button>
                <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Time table update request</a>
                  <a class="dropdown-item" href="#">get leave request</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </li>

          </ul>

        </nav>
      </div>
    )
  }
}
