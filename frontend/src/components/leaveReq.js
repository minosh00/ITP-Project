import React, { Component } from 'react'
import axios from 'axios'


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
        <div className ="leave">
       <div className = "container" >
        
           
       <center><h1><b><u>Leave request Form</u></b></h1></center>
          
       <form className="needs-validation" noValidate>


       <div class="form-outline mb-4">
       <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer ID</b></label>
    <input type="text" className="form-control" name="lecId" value={this.state.lecId} onChange={this.handleInputChange}/>
    </div>
<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Lecturer Name</b></label>
    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange}/>
    </div>
       <br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Date leaves to begin</b></label>
    <input type="text" className="form-control" name="beginDate" value={this.state.beginDate} onChange={this.handleInputChange}/>
    </div>   
<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Date of the return to duties</b></label>
    <input type="text" className="form-control" name="returnDate" value={this.state.returnDate} onChange={this.handleInputChange}/>
    </div>

    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Reason for the leave</b></label>
    <input type="text" className="form-control" name="reason" value={this.state.reason} onChange={this.handleInputChange}/>
    </div>
<br></br>
    
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Email</b></label>
    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange}/>
    </div>

<br></br>
    <div class="form-outline mb-4">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><b>Contact Number</b></label>
    <input type="text" className="form-control" name="Cnumber" value={this.state.Cnumber} onChange={this.handleInputChange}/>
    </div>
<br></br>
<br></br>

<center><button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Send Request</button></center>
</form>
</div>
</div>

)
}
}