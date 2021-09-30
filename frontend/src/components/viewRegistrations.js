import React, { Component } from 'react';
import axios from 'axios'
import { pdfDownload } from './pdfDownload'
import "./Regviewer.css"


class viewRegistrations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationL: [],
      lecFname: "",
      lecLname:"",
      nic:"",
      dob:"",
      email: "",
      cNumber: "",
      address:"",
      Rdate:"",
      uploads: ""
    };
    this.navigateDownload = this.navigateDownload.bind(this);
    this.navigateDelete = this.navigateDelete.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:8000/getAlldata").then((res) => {
      console.log(res.data);
      this.setState({ registrationL: res.data.data });
      console.log("registrationL", this.state.registrationL);
    });
  }

  navigateDownload(event, uploads) {
    pdfDownload(event, uploads);
  }


  navigateDelete(event, id) {
    alert("Decline Registration")
    axios.delete(`/deleteRegistration/${id}`).then(res => {
      console.log(res.data)
      window.location.reload();
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    if (this.state.registrationL.length == 0) {
      return (
        <div className="research-content">
          <div className="research-alert">
            <h2> No registrations uploads available!</h2>
          </div>
        </div>);
    }

    return (
      <div className="">
        <div className="container">
        <br></br>
          <div className = "alllecturerheader">
          <center><h3>View Lecturer Registrations</h3></center>
          </div>
          <br />
          
          <br></br>
          {this.state.registrationL.length > 0 && this.state.registrationL.map((value, index) => (
            <div key={index} className="card mb-3">
              <div className="card-content-research">
                <div className="p-3">
                  <h4 style={{ color: 'black' }}><p><u>Registration No : 0{index + 1}</u></p></h4>
                  <h5 style={{ color: 'black' }}>First Name : {value.lecFname}</h5>
                  <h5 style={{ color: 'black' }}>Last Name : {value.lecLname}</h5>
                  <h5 style={{ color: 'black' }}>NIC number : {value.nic}</h5>
                  <h5 style={{ color: 'black' }}>Date Of Birth : {value.dob}</h5>
                  <h5 style={{ color: 'black' }}>E-mail : {value.email}</h5>
                  <h5 style={{ color: 'black' }}>Mobile Number : {value.cNumber}</h5>
                  <h5 style={{ color: 'black' }}>Address : {value.address}</h5>
                  <h5 style={{ color: 'black' }}>Registration Date :{value.Rdate}</h5>
                  <button className="btn btn-light" onClick={event => this.navigateDownload(event, value.uploads)}> <i class="fa fa-file" aria-hidden="true"></i> <b> View Curriculum Vitae</b></button>

                  <a href = "/addLec" className="btn btn-success" style={{ marginLeft: "2%" }} > <i class="fa fa-plus" aria-hidden="true"></i><b> Add to the Institute</b></a>


                  <button className="btn btn-danger" style={{ marginLeft: "2%" }} onClick={event => this.navigateDelete(event, value._id)}><i class="fa fa-times" aria-hidden="true"></i> <b>Reject Registration </b></button>
                  
                  <a href = "/lecConfirmationSend" className="btn btn-primary" style={{ marginLeft: "2%" }} > <i class="fas fa-envelope-square"></i><b> Send E-mail</b></a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default viewRegistrations;
