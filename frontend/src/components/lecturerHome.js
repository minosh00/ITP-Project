import React, { Component } from 'react'
import axios from'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './style.css'


export default class lecturerHome extends Component {
constructor(props){
  super(props);

  this.state={
    lecturers:[]

  };
}

componentDidMount(){
  this.retrieveLecturers();
}

retrieveLecturers(){
  axios.get("/lecturers").then(res =>{
    if(res.data.success){
     this.setState({
      lecturers:res.data.existingLecturers
     });

     console.log(this.state.lecturers);
    }
  });
}
onDelete = (id) =>{
  axios.delete(`/lecturer/delete/${id}`).then((then) =>{
    alert("Delete Successfully!");
    this.retrieveLecturers();
  })
}

filterDate(lecturers,searchKey){

  const result = lecturers.filter((lec) =>
  lec.lecId.toLowerCase().includes(searchKey)||
  lec.lecFname.toLowerCase().includes(searchKey)||
  lec.lecLname.toLowerCase().includes(searchKey)||
  lec.nic.toLowerCase().includes(searchKey)||
  lec.dob.toLowerCase().includes(searchKey)||
  lec.email.toLowerCase().includes(searchKey)||
  lec.cNumber.toLowerCase().includes(searchKey)||
  lec.address.toLowerCase().includes(searchKey)||
  lec.username.toLowerCase().includes(searchKey)||
  lec.password.toLowerCase().includes(searchKey)||
  lec.summary.toLowerCase().includes(searchKey)||
  lec.aQualification.toLowerCase().includes(searchKey)||
  lec.Rmembership.toLowerCase().includes(searchKey)||
  lec.Rdate.toLowerCase().includes(searchKey)
  )

  this.setState({lecturers:result})
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;
axios.get("/lecturers").then(res =>{     
      if(res.data.success){

        this.filterDate(res.data.existingLecturers,searchKey)
      }
    });
}



  render() {
    return(
      
      <div>
        <div className="row">
          <div className="col-lg-12 mt-3 mb-3">
           
          
            <div style={{marginBottom: '10px', marginLeft:'5px'}}>
            <h1><b>Lecturer Management</b></h1>
            <h5>Details of the lecturers in the Royal-Edu institute</h5>
        </div >
            </div>
            <div className="col-lg-3 mt-2 mb-2">
            <div style={{marginLeft:'12px'}}>
              <input
              className="form-control"
              type="search"
              placeholder="Serach"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input></div>
              </div>
              </div>

              <div className ="addbtn" >
              <button className="btn btn-success"><a href = "/addLec" style ={{textDecoration:'none',color:'white',marginLeft:'12px'}}><i class="fa fa-plus-square" aria-hidden="true"></i>   Add New Lecturer Details</a></button>
              </div>

              <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className=" fa fa-file-excel-o btn btn-primary btn-sm"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="  Download All Details as XLS"/>
                <table id="table-to-xls">
               
                  

        <table className =" table table-bordered" >
        <thead className ="table-dark">

        <br></br>
        
          <tr>
             <th scope="col" >#</th>
             <th scope="col">Lecturer ID</th>
             <th scope="col">First Name </th>
             <th scope="col">Last Name</th>
             <th scope="col">NIC number</th>
             <th scope="col">Date Of Birth</th>
             <th scope="col">E-mail</th>
             <th scope="col">Contact Number</th>
             <th scope="col">Address</th>
             <th scope="col">Username </th>
             <th scope="col">Password</th>
             <th scope="col">Career Summary</th>
             <th scope="col">Acedemic Qualifications</th>
             <th scope="col">Research interests and memberships</th>
             <th scope="col">Registration Date</th>
             <th scope="col">Action</th>
             
 
          </tr>
        </thead>
        <tbody>
          {this.state.lecturers.map((lecturer,index) =>(
             <tr key ={index}>
                <th scope = "row">{index+1}</th>
               
                <td><b>{lecturer.lecId}</b></td>
                <td><b>{lecturer.lecFname}</b></td>
                <td><b>{lecturer.lecLname}</b></td>
                <td><b>{lecturer.nic}</b></td>
                <td><b>{lecturer.dob}</b></td>
                <td><b>{lecturer.email}</b></td>
                <td><b>{lecturer.cNumber}</b></td>
                <td><b>{lecturer.address}</b></td>
                <td><b>{lecturer.username}</b></td>
                <td><b>{lecturer.password}</b></td>
                <td><b>{lecturer.summary}</b></td>
                <td><b>{lecturer.aQualification}</b></td>
                <td><b>{lecturer.Rmembership}</b></td>
                <td><b>{lecturer.Rdate}</b></td>
                <td>

                  
                <a className = "btn btn-info" href={`/postLec/${lecturer._id}`}>
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp;View
                    </a>
                    <br></br>
                  
                    &nbsp;
                    
                  <a className = "btn btn-warning" href={`/editLec/${lecturer._id}`}>
                    < i className ="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    <br></br>
                    &nbsp;
                  
                    <br></br>
                    <a className = "btn btn-danger" href="#" onClick = {() => this.onDelete(lecturer._id)}>
                    <i className ="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                    

                </td>
                

             </tr>


          ))}

        </tbody>
        </table>
        </table>
        

       
        
    
      </div>
      
    )
  }
}
