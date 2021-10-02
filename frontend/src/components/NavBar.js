import React, {Component} from 'react';

export default class NavBar extends Component {
    render () {
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-light" style = {{backgroundColor:'#e3f2fd'}}>
  <div class="container-fluid">
   <button class="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" 
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
           <button className = "btn btn-info"> <a href = "/" style = {{textDecoration: 'none' , color : 'black'}}><b> Home </b></a></button>
           
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/buycourse" style = {{textDecoration: 'none' , color : 'black'}}><b>Buy Course</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/cReceipt" style = {{textDecoration: 'none' , color : 'black'}}><b>Details of students who purchased for courses</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/feespay" style = {{textDecoration: 'none' , color : 'black'}}><b>Fees Pay</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           <button className = "btn btn-info"> <a href = "/paidlist" style = {{textDecoration: 'none' , color : 'black'}}><b>Paid List</b></a></button>
           <br/><br/>
           <button className = "btn btn-secondary"> <i class="fa fa-list" aria-hidden="true"></i>  <a href = "/calculatesalary" style = {{textDecoration: 'none' , color : 'black'}}><b>Calculte Lecturer Salary</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;

           <button className = "btn btn-secondary"> <i class="fa fa-list" aria-hidden="true"></i>  <a href = "/calculateStaffsalary" style = {{textDecoration: 'none' , color : 'black'}}><b>Calculte Staff Salary</b></a></button>
           &nbsp;
           &nbsp;
           &nbsp;
           
        </li>
        </ul>
    </div>
  </div>
</nav>
        )
    }
}
