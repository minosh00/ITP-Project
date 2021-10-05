import React, { Component } from 'react'

export default class RegisterTypes extends Component {
    render() {
        return (
            <div>
                 <div className='container'>
                    <center><table>
                        <tr>
                            <td>
                                <a href='/signupstd'><img src='' style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-info" style={{marginTop:'20px'}} target="_blank" rel="noopener noreferrer" href='/signupstd'>&nbsp;Student Registration&nbsp;</a></center>
                            </td>

                            <td>
                                <a href='/lecturerreg'><img src='' style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-info" style={{marginTop:'20px'}} target="_blank" rel="noopener noreferrer" href='/lecturerreg'>&nbsp;Lecturer Registration&nbsp;</a></center>
                            </td>

                            <td>
                                <a href=''><img src='' style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
                                <center><a className="btn btn-info" style={{marginTop:'20px'}} target="_blank" rel="noopener noreferrer" href=''>&nbsp;Staff Registration&nbsp;</a></center>
                            </td>
                        </tr>

                        
                    </table></center>
                </div>
            </div>
        )
    }
}
