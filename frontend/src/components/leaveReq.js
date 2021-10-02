import React, { Component } from 'react'
import axios from 'axios'
//import background from '../images/home34.png';



export default class leaveReq extends Component {
    
    constructor(props){
        super(props);
        this.state={
            lecId:"",
            name:"",
           beginDate:"",
           returnDate:"",
           reason:"",
           email:"",
           Cnumber:"",

        }
    }

    

handleInputChange =(e) =>{
    const {name,value} =e.target;



    this.setState({
        ...this.state,
        [name]:value
    })
}
onsubmit = (e) =>{
    e.preventDefault();
    const {lecId,name,beginDate,returnDate,reason,email,Cnumber} = this.state;
    const data ={
       
        lecId : lecId,
        name: name,
        beginDate:beginDate,
        returnDate:returnDate,
        reason:reason,
        email:email,
        Cnumber:Cnumber

        
    }
    console.log(data)
    axios.post("/req/save",data).then((res) =>{
        if(res.data.success){
            alert("Your request send Succesfully!")
            this.setState({
                lecId:"",
                name:"",
               beginDate:"",
               returnDate:"",
               reason:"",
               email:"",
               Cnumber:"",
    
            })
        }
    })
}



render(){
    return (
       
        <div 
        style={{
         width: '1200px',
         border: '3px solid black',
         marginRight:'50px',
         marginLeft:'360px'}}>
            
       <div className = "container" >
        
           <br></br>
           <br></br>
       <center><h3><b>Request for get leave</b></h3></center>
       <br></br>
       <center><p>In line with Institute policy relating to annual leave, all lecturers must submit a formal request for 
                  annual leave. A separate request form must be submitted for each block of leave requested.
                  All requests are considered based on existing leave requests received from all lecturers, work 
                  commitments and minimum academic staffing levels required.</p></center>
          
       <form className="needs-validation" noValidate>

<br></br>
       <div class="form-outline mb-4">
       <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer ID</b></label>
    <input  className="form-control" name="lecId" value={this.state.lecId} onChange={this.handleInputChange}/>
    </div>


<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer Name</b></label>
    <input  className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange}/>
    </div>
       <br></br>




    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Date leaves to begin</b></label>
    <input type="date"  className="form-control" name="beginDate" value={this.state.beginDate} onChange={this.handleInputChange}/>
    </div>   


<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Date of the return to duties</b></label>
    <input  type= "date" className="form-control" name="returnDate" value={this.state.returnDate} onChange={this.handleInputChange}/>
    </div>



    <div class="col-md-12">
    <label  style={{fontSize:'14px'}} className="form-label"><b>Reason for the get leave</b></label>
    <textarea className="form-control" name="reason" cols="25" rows="3" value={this.state.reason} onChange={this.handleInputChange}/>
    </div>
<br></br>


    
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Email</b></label>
    <input  className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange}/>
    </div>

<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Contact Number</b></label>
    <input  className="form-control" name="Cnumber" value={this.state.Cnumber} onChange={this.handleInputChange}/>
    </div>
<br></br>


<center><button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Send Request</button></center>
<br></br>
</form>
</div>
</div>

)
}
}