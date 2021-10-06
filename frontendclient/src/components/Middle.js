import React, { Component } from 'react'
import homeimg1 from './HomeImages/homeimg1.jpg'
import homeimg2 from './HomeImages/homeimg2.jpg'
import reggif from './HomeImages/reggif.gif'
import subgif from './HomeImages/subgif.gif'
import coursegif from './HomeImages/coursegif.gif'
import maingif from './HomeImages/maingif.gif'

export default class Middle extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={maingif} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={maingif} alt="Second slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div><br />

                <div className='container'>
                    <div className="row" style={{ backgroundColor: '#1a8cff', borderRadius: '0px 150px 150px 0px' }}>
                        <table>
                            <tr>
                                <td style={{ width: '40%' }}>
                                    <img src={reggif} style={{ width: '500px', height: 'auto' }} />
                                </td>
                                <td style={{ color: 'white', textAlign:'center' }}>
                                    <h3 ><b>New Registration for Students</b></h3>
                                    <p>now you can join with our next year classes</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px' }}>Register now!</a>
                                </td>
                            </tr>
                        </table>
                    </div><br />
                    <div className="row" style={{ backgroundColor: '#0069cc', borderRadius: '150px 0px 0px 150px' }}>
                        <table>
                            <tr>
                                <td style={{ color: 'white', textAlign:'center'}}>
                                    <h3 style={{ marginLeft: '30px' }}><b>How to buy online subjects?</b></h3>
                                    <p style={{ marginLeft: '30px' }}>You can buy subjects here. Click below...</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px', marginLeft: '30px' }}>Register now!</a>
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
                                <td style={{ color: 'white', textAlign:'center' }}>
                                    <h3 ><b>How to buy online courses?</b></h3>
                                    <p>You can buy courses here. Click below...</p>
                                    <a className="btn btn-outline-light btn-lg" style={{ width: '200px' }}>Register now!</a>
                                </td>
                            </tr>
                        </table>
                    </div>


                </div>
            </div>
        )
    }
}
