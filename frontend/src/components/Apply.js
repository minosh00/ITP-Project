import React, { Component } from 'react'
import axios from 'axios';

export default class Apply extends Component {
  constructor(props){
    super(props);
    this.state={
        FirstName:"",
        LastName:"",
        DateOfBirth:"",
        position:"",
        ContactNumber:"",
        NationalIDNumber:"",
        Gender:"",
        Address:"",
        ExpectedSalary:""
    }
}

handleInputChange = (e)=>{
    const{name,value} =  e.target;

    this.setState({
        ...this.state,
        [name]:value,
    })
}

onSubmit = (e)=>{
    
    e.preventDefault();

    const id = this.props.match.params.id;

    const{FirstName, LastName,
        DateOfBirth, position, ContactNumber, NationalIDNumber, Gender, 
        Address, ExpectedSalary} = this.state;

    const data ={
        FirstName:FirstName,
        LastName:LastName,
        DateOfBirth:DateOfBirth,
        position:position,
        ContactNumber:ContactNumber,
        NationalIDNumber:NationalIDNumber,
        Gender:Gender,
        Address:Address,
        ExpectedSalary:ExpectedSalary
    }

    console.log(data)

    axios.post(`/application/save`, data).then((res)=>{
        if(res.data.success){
            alert("Applied Succesfully..!")
            this.setState({
                FirstName:"",
                LastName:"",
                DateOfBirth:"",
                position:"",
                ContactNumber:"",
                NationalIDNumber:"",
                Gender:"",
                Address:"",
                ExpectedSalary:""
            })
        }
    })
}
    render() {

      return (

        <div style={{marginLeft:100}}>

<a className="btn btn-success" href="/staffhome" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-home"></i>&nbsp;Home
                </a>
        &nbsp;
               &nbsp;
               &nbsp;
               &nbsp;
               &nbsp;
              
               <a className="btn btn-success" href="/applications" style={{textDecoration:'none', color:'white'}}>
                 <i className="fas fa-file"></i>&nbsp;Applications
                </a>
                <br/>
                <br/>
       <h1 className="h1">APPLY TO STAFF</h1>
       <p class="lead">Note*<br/> Need Atleast 3 Years Working Experience On Industry.<br/>You Will Have physical Interview</p>
      <hr/>
     <form className="needs-validation" noValidate>
     

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">First Name</label>
     <input type="text" 
     className="form-control" 
     name="FirstName"
     value={this.state.FirstName}
     onChange={this.handleInputChange}/>
   </div>

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">Last Name</label>
     <input type="text" 
     className="form-control" 
     name="LastName"
     value={this.state.LastName}
     onChange={this.handleInputChange}/>
   </div>


   <div className="col-md-3">
    <label for="inputCity" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" name="DateOfBirth" value={this.state.DateOfBirth} onChange={this.handleInputChange} required/>
    </div>

<br/>
   <div className="col-md-4">
  <label for="inputState" className="form-label">Select Position</label>
  <select className="form-control" name="position" value={this.state.position} onChange={this.handleInputChange} required>
  <option>Choose</option>
  <option>Librarian</option>
  <option>IT Staff</option>
  <option>System Editor</option>
  </select></div>

  <br/>

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">Contact Number</label>
     <input type="text" 
     className="form-control" 
     name="ContactNumber"
     value={this.state.ContactNumber}
     onChange={this.handleInputChange}/>
   </div>

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">National ID Number</label>
     <input type="text" 
     className="form-control" 
     name="NationalIDNumber"
     value={this.state.NationalIDNumber}
     onChange={this.handleInputChange}/>
   </div>

   


   <div className="col-md-4">
  <label for="inputState" className="form-label">Select Gender</label>
  <select className="form-control" name="Gender" value={this.state.Gender} onChange={this.handleInputChange} required>
  <option>Choose</option>
  <option>Male</option>
  <option>Female</option>
  </select></div>
   
  <br/>

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">Address</label>
     <input type="text" 
     className="form-control" 
     name="Address"
     value={this.state.Address}
     onChange={this.handleInputChange}/>
   </div>

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">Expected Salary</label>
     <input type="text" 
     className="form-control" 
     name="ExpectedSalary"
     value={this.state.ExpectedSalary}
     onChange={this.handleInputChange}/>
   </div>

   <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> 
    <i className="far fa-check-square"></i>&nbsp;Apply To Staff
   </button>

   </form>
   <br/>
   <br/>
   <br/>
   <br/>
         
        </div>
        )
    }
}
