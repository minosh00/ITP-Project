import React, { Component } from 'react'
import axios from 'axios';
import './style.css'
import notice from '../images/n.png';
import notice1 from '../images/n2.png';
import notice2 from '../images/tele.png';
import hone from '../images/hone.png';


export default class detailsHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateDetails: []

    };
  }

  componentDidMount() {
    this.retrieveUpdateDetails();
  }

  retrieveUpdateDetails() {
    axios.get("/lecDetailsReq").then(res => {
      if (res.data.success) {
        this.setState({
          updateDetails: res.data.existingUpdateDetails
        });

        console.log(this.state.updateDetails);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`/detailreq/delete/${id}`).then((then) => {
      alert("Delete Successfully!");
      this.retrieveUpdateDetails();
    })
  }

  filterDate(updateDetails, searchKey) {

    const result = updateDetails.filter((detail) =>
      detail.date.toLowerCase().includes(searchKey) ||
      detail.notice.toLowerCase().includes(searchKey)


    )

    this.setState({ updateDetails: result })
  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;
    axios.get("/lecDetailsReq").then(res => {
      if (res.data.success) {

        this.filterDate(res.data.existingUpdateDetails, searchKey)
      }
    });
  }
  render() {
    return (


      <div className="container" >
        <div className="row">
          <div className="col-lg-12 mt-3 mb-3">
            <div className="container">
              <h1><center><b>Special Notices For LECTURERS <img src={hone} style={{ width: '150px', height: '100%' }}></img></b></center></h1>
            </div>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
          </div>
        </div>
        <table className=" table table-bordered" >

          {this.state.updateDetails.map((updateDetail, index) => (
            <div key={index} className="card mb-3">
              <div className="container" style={{ border: '2px solid black', width: '100%', background: "	#B0C4DE" }}>
                <img src={notice1} style={{ width: '190px', height: '100%' }}></img>
                <h6><b>Notice number : {index + 1}</b></h6><br></br>
                <h3 style={{ color: 'red' }}><b>Date :{updateDetail.date}</b></h3>
                <h3 style={{ color: 'black' }}><b>{updateDetail.notice}</b></h3>
                <br></br>
              <img src={notice2} style={{ width: '60px', height: '100%' }}></img>Further inquiries :0112881376,  0112881150

              </div>
            </div>
          ))}
        </table>
        <br></br>
        <div className="row">
          <div className="col-lg-12 mt-3 mb-3">
            <div className="container">
              <h1><center><b>Special Notices For STUDENTS <img src={hone} style={{ width: '150px', height: '100%' }}></img></b></center></h1>
            </div>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
          </div>
        </div>
        <table className=" table table-bordered" >
          <div className="card mb-3">

            <div className="container" style={{ border: '2px solid black', width: '100%', background: "#E6E6FA" }}>
              <img src={notice} style={{ width: '150px', height: '100%' }}></img>
              <h6><b>Notice number : 1</b></h6>
              <h3 style={{ color: 'red' }}><b>Rgistration offers</b></h3>
              <h2 style={{ color: 'black' }}><b>To: All Students</b></h2>
              <h3 style={{ color: 'black' }}><b>All the students can Register in to our Institiute every year and specially we offer  special discount for Some students who are regiter into ouur institute between December-January.</b></h3>
              <br></br>
              <img src={notice2} style={{ width: '50px', height: '100%' }}></img>Further inquiries : 0112881364 ,0701235770
            </div>
          </div>
        </table>
        <table className=" table table-bordered" >
          <div className="card mb-3">

            <div className="container" style={{ border: '2px solid black', width: '100%', background: "#E6E6FA" }}>
              <img src={notice} style={{ width: '150px', height: '100%' }}></img>
              <h6><b>Notice number : 2</b></h6>
              <h3 style={{ color: 'red' }}><b>Payment deadline of the classes</b></h3>
              <h2 style={{ color: 'black' }}><b>To: All Students</b></h2>
              <h3 style={{ color: 'black' }}><b>If any student don’t pay class fees to our institute on time who can’t enter into our Royal-Edu as well.</b></h3>
              <br></br>
              <img src={notice2} style={{ width: '50px', height: '100%' }}></img>Further inquiries :0112881376,  0112881150, 0112881364 ,0701235770
            </div>
          </div>
        </table>
        <table className=" table table-bordered" >
          <div className="card mb-3">

            <div className="container" style={{ border: '2px solid black', width: '100%', background: "#E6E6FA" }}>
              <img src={notice} style={{ width: '150px', height: '100%' }}></img>
              <h6><b>Notice number : 3</b></h6>
              <h3 style={{ color: 'red' }}><b>Monthly quiz</b></h3>
              <h2 style={{ color: 'black' }}><b>To: All Students</b></h2>
              <h3 style={{ color: 'black' }}><b>All Students Please note that all the scheduled online academic activities and online quiz for every subjects will be held on every months, which will be held on 1st  of week of every month. </b></h3>
              <br></br>
              <img src={notice2} style={{ width: '50px', height: '100%' }}></img>Further inquiries :0112881376
             

            </div>
          </div>
        </table>
        
      </div>



    )
  }
}
