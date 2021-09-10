import React, { Component } from 'react'
import student from './AdminHomeImages/students.png'
import subject from './AdminHomeImages/bookshelf.png'
import lecturer from './AdminHomeImages/lecture.png'
import course from './AdminHomeImages/online-course.png'
import timetable from './AdminHomeImages/schedule.png'
import attendence from './AdminHomeImages/immigration.png'
import staff from './AdminHomeImages/networking.png'
import library from './AdminHomeImages/library.png'
import payment from './AdminHomeImages/pay.png'

export default class AdminHome extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <center><table>
                        <tr>
                            <td>
                                <a href=''><img src={student} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href=''>&nbsp;Student Management&nbsp;</a></center>
                            </td>

                            <td>
                                <a href='/Adminsubhome'><img src={subject} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/Adminsubhome'>&nbsp;Subject Management&nbsp;</a></center>
                            </td>

                            <td>
                                <a href='/lechome'><img src={lecturer} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/lechome'>&nbsp;lecturer Management&nbsp;</a></center>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href=''><img src={course} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href=''>&nbsp;Course Management&nbsp;</a></center>
                            </td>

                            <td>
                                <a href=''><img src={timetable} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/Admintimetable'>&nbsp;TimeTable Management&nbsp;</a></center>
                            </td>

                            <td>
                                <a href=''><img src={attendence} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/AdminAttendance'>&nbsp;Attendence Management&nbsp;</a></center>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href='/staffhome'><img src={staff} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/staffhome'>&nbsp;Staff Management&nbsp;</a></center>
                            </td>

                            <td>
                                <a href=''><img src={library} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href=''>&nbsp;Library Management&nbsp;</a></center>
                            </td>
                            
                            <td>
                                <a href='/paymenthome'><img src={payment} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-outline-success" style={{marginTop:'20px'}} href='/paymenthome'>&nbsp;payment Management&nbsp;</a></center>
                            </td>
                        </tr>
                    </table></center>
                </div>
            </div>
        )
    }
}
