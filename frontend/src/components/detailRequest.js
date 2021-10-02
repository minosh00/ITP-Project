import React, { Component } from 'react'
import background from '../images/red.png';
import axios from 'axios'
//import './style.css'


export default class detailRequest extends Component {
    
    constructor(props){
        super(props);
        this.state={
            date:"",
            notice:"",
            
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
    const {date,notice} = this.state;
    const data ={
        date :date,
        notice:notice
        
    }
    console.log(data)
    axios.post("/lecDetailsReq/save",data).then((res) =>{
        if(res.data.success){
            alert("Your request sent successfully!")
            this.setState({
                date:"",
                notice:"",
                
            })
        }
    })
}



render(){
    return (
       <div className = "container" >
           
          
           <div class="card" style={{ width: "80%",
            marginLeft: "8%" ,
            marginTop:'10px',
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
           <center><h4 class="card-header"> <b>Special Notices for Lecturers</b></h4></center>
          
       <form className="needs-validation" noValidate>
       
      
<div className="card-body">
<label className="form-label"><b>  Date</b></label>
<input className="form-control"  type ="date"  name="date"  value={this.state.date} onChange={this.handleInputChange}></input>

<br></br>


<label className="form-label"><b>  Notice</b></label>
<textarea className="form-control"   name="notice"  rows="4" value={this.state.notice} onChange={this.handleInputChange}></textarea>
</div>




<center>
    <button type="submit" className="btn btn-info" onClick={this.onsubmit}>Publish the notice</button>
</center>
<br></br>
</form>
</div>
</div>
)
}
}