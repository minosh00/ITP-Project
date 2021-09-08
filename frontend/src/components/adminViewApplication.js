import React, { Component } from 'react'
import axios from 'axios';

export default class adminViewApplication extends Component {
  constructor(props){
    super(props);
    this.state={
        RegistationNumber:"",
        AppointedDate:"",
        FirstName:"",
        LastName:"",
        DateOfBirth:"",
        position:"",
        ContactNumber:"",
        NationalIDNumber:"",
        Gender:"",
        Address:"",
        BasicSalary:""
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

    const{RegistationNumber,AppointedDate, FirstName, LastName,
        DateOfBirth, position, ContactNumber, NationalIDNumber, Gender, 
        Address, BasicSalary} = this.state;

    const data ={
        RegistationNumber:RegistationNumber,
        AppointedDate:AppointedDate,
        FirstName:FirstName,
        LastName:LastName,
        DateOfBirth:DateOfBirth,
        position:position,
        ContactNumber:ContactNumber,
        NationalIDNumber:NationalIDNumber,
        Gender:Gender,
        Address:Address,
        BasicSalary:BasicSalary
    }

    console.log(data)

    axios.post(`/register/save`, data).then((res)=>{
        if(res.data.success){
            alert("Member Added..!")
            this.setState({
                RegistationNumber:"",
                AppointedDate:"",
                FirstName:"",
                LastName:"",
                DateOfBirth:"",
                position:"",
                ContactNumber:"",
                NationalIDNumber:"",
                Gender:"",
                Address:"",
                BasicSalary:""
            })
        }
    })
}

onDelete=(id)=>{
  axios.delete(`/application/delete/${id}`).then((res)=>{
    this.retrieveapplications();
  })
}

componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/application/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                FirstName:res.data.post.FirstName,
                LastName:res.data.post.LastName,
                DateOfBirth:res.data.post.DateOfBirth,
                position:res.data.post.position,
                ContactNumber:res.data.post.ContactNumber,
                NationalIDNumber:res.data.post.NationalIDNumber,
                Gender:res.data.post.Gender,
                Address:res.data.post.Address,
                ExpectedSalary:res.data.post.ExpectedSalary
            });

            console.log(this.state.post);
        }
    });
}
   
   
    render() {

      return (

        <div className="col-md-8 mt-4 mx-auto">

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
       <center><h1 className="h1">ADD TO STAFF</h1></center> 

      <hr/>
     <form className="needs-validation" noValidate>
     
     <div className="form-group" style={{marginBottom:'15px'}}>
     <label for="formGroupExampleInput" style={{textDecoration:'none', color:'red'}} >Registration Number*</label>
     <input type="text" 
     className="form-control" 
     name="RegistationNumber"
     value={this.state.RegistationNumber}
     required 
     onChange= {this.handleInputChange}/>
   </div>


   <div className="col-md-3">
    <label for="inputCity" className="form-label" style={{textDecoration:'none', color:'red'}}>Date of Appointed*</label>
    <input type="date" className="form-control" name="AppointedDate" value={this.state.AppointedDate} onChange={this.handleInputChange} required/>
    </div>

<br/>
   <div className="mb-3">
   <label for="formGroupExampleInput" style={{textDecoration:'none', color:'red'}}>BasicSalary*</label>
     <input type="text" 
     className="form-control" 
     name="BasicSalary"
     value={this.state.BasicSalary}
     required 
     onChange={this.handleInputChange}/>
   </div>

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

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">Date Of Birth</label>
     <input type="text" 
     className="form-control" 
     name="DateOfBirth"
     value={this.state.DateOfBirth}
     onChange={this.handleInputChange}/>
   </div>

   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">position</label>
     <input type="text" 
     className="form-control" 
     name="position"
     value={this.state.position}
     onChange={this.handleInputChange}/>
   </div>

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

   
   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">Gender</label>
     <input type="text" 
     className="form-control" 
     name="Gender"
     value={this.state.Gender}
     onChange={this.handleInputChange}/>
   </div>

   
   <div className="mb-3">
   <label for="formGroupExampleInput" class="form-label">Address</label>
     <input type="text" 
     className="form-control" 
     name="Address"
     value={this.state.Address}
     onChange={this.handleInputChange}/>
   </div>

   <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> 
    <i className="far fa-check-square"></i>&nbsp;Add To Staff
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
