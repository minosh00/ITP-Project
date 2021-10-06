import React, { Component } from 'react'
import reggif from './HomeImages/reggif.gif'
import subgif from './HomeImages/subgif.gif'
import coursegif from './HomeImages/coursegif.gif'
import maingif from './HomeImages/maingif.gif'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Middle extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%' }}>
                    <center><img src={maingif} style={{ width: '100%', height: 'auto' }} /></center>
                </div>
                <br />

                <div className='container'>
                    <div className="row" style={{ backgroundColor: '#1a8cff', borderRadius: '0px 150px 150px 0px' }}>
                        <table>
                            <tr>
                                <td style={{ width: '40%' }}>
                                    <img src={reggif} style={{ width: '500px', height: 'auto' }} />
                                </td>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 ><b>New Registration for Students</b></h3>
                                    <p>now you can join with our next year classes</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px' }} href='/signupstd'>Register now!</a>
                                </td>
                            </tr>
                        </table>
                    </div><br />
                    <div className="row" style={{ backgroundColor: '#0069cc', borderRadius: '150px 0px 0px 150px' }}>
                        <table>
                            <tr>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 style={{ marginLeft: '30px' }}><b>How to buy online subjects?</b></h3>
                                    <p style={{ marginLeft: '30px' }}>You can buy subjects here. Click below...</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px', marginLeft: '30px' }} href='/allsubjects'>Buy now!</a>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <img src={subgif} style={{ width: '400px', height: 'auto' }} />
                                </td>
                            </tr>
                        </table>
                    </div><br />
                    <div className="row" style={{ backgroundColor: '#004f99', borderRadius: '0px 150px 150px 0px' }}>
                        <table>
                            <tr>
                                <td style={{ width: '40%' }}>
                                    <img src={coursegif} style={{ width: '500px', height: 'auto' }} />
                                </td>
                                <td style={{ color: 'white', textAlign: 'center' }}>
                                    <h3 ><b>How to buy online courses?</b></h3>
                                    <p>You can buy courses here. Click below...</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px' }} href='/course'>Buy now!</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br />
                    <hr style={{ backgroundColor: '#004f99', height: '5px' }}></hr>
                    <br />
                    <div id="contact" class="container" style={{ color: '#808080' }}>
                        <h3 class="text-center">Contact</h3>
                        <p class="text-center"><em>We love our students!</em></p>

                        <div class="row" style={{ color: '#808080' }}>
                            <div class="col-md-4">
                                <p>Visitors? Drop a note.</p>
                                <p><span class="glyphicon glyphicon-map-marker"></span><i class="fas fa-map-marker-alt"></i> &nbsp;Colombo, SL</p>
                                <p><span class="glyphicon glyphicon-phone"></span><i class="fas fa-phone"></i> &nbsp;Phone: +94 1515151515</p>
                                <p><span class="glyphicon glyphicon-envelope"></span><i class="far fa-envelope"></i> &nbsp;Email: royaledu@mail.com</p>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Name" required />
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                    </div>
                                </div>
                                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                                <br />
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        
                                        <Popup trigger={<button class="btn pull-right btn btn-outline-secondary" type="submit">Send</button>} position="right center">
                                            <div>Thank You! for your response<br/></div>
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
