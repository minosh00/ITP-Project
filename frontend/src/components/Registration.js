import React, { Component } from 'react'
import axios from 'axios'
import background from '../images/pic33.jpg';

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state={
            student_full_name:" ",
            Name_with_initials:" ",
            date_of_addmission:" ",
            class_name:" ",
            course_name:" ",
            date_of_birth:" ",
            nic:" ",
            email:" ",
            address:" ",
            telephone:" ",
            gender:" ",
            religion:" ",
            nationality:" ",
            gurdian_name:" ",
            gurdian_contact_number:" ",
            gurdian_email:" ",
            gurdian_occupation:" ",
            date:" ",
            bank_name:" ",
            branch:" ",
            payment_date:" "
        }
    
    }

handleInputChange =(e) =>{
    const {name,value} =e.target;

    this.setState({
        ...this.state,
        [name]:value
    })
}
onSubmit = (e) =>{
    e.preventDefault();
    const {student_full_name,Name_with_initials,date_of_addmission,class_name,course_name,date_of_birth,nic,email,address,telephone,gender,religion,nationality,gurdian_name,gurdian_contact_number,gurdian_email,gurdian_occupation,date,bank_name,branch,payment_date} = this.state;

    const data ={
        
        student_full_name:student_full_name,
        Name_with_initials:Name_with_initials,
        date_of_addmission:date_of_addmission,
        class_name:class_name,
        course_name:course_name,
        date_of_birth:date_of_birth,
        nic:nic,
        email:email,
        address:address,
        telephone:telephone,
        gender:gender,
        religion:religion,
        nationality:nationality,
        gurdian_name:gurdian_name,
        gurdian_contact_number:gurdian_contact_number,
        gurdian_email:gurdian_email,
        gurdian_occupation:gurdian_occupation,
        date:date,
        bank_name:bank_name,
        branch:branch,
        payment_date:payment_date
    }
    console.log(data);

    axios.post('/post/save',data).then((res) =>{
        if(res.data.success){
            this.setState({
            student_full_name:"",
            Name_with_initials:"",
            date_of_addmission:"",
            class_name:"",
            course_name:"",
            date_of_birth:"",
            nic:"",
            email:"",
            address:"",
            telephone:"",
            gender:"",
            religion:"",
            nationality:"",
            gurdian_name:"",
            gurdian_contact_number:"",
            gurdian_email:"",
            gurdian_occupation:"",
            date:"",
            bank_name:"",
            branch:"",
            payment_date:""
            })
        }
    })
}



render(){
    return (
        <div style={{marginTop:'20px',backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
          <p class="fs-4">Student Management System</p>
                <div className="container">
                <h1><p class="fs-1"> Student Registration Form </p></h1>
                &nbsp;&nbsp;   
  
   <form className="needs-validation" noValidate>
   <div className="mb-3">
<label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">Student full Name </p></label>
<input className="form-control" name="student_full_name" aria-describedby="emailHelp" value={this.state.student_full_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label"><p class="fw-bold">Name with Initials </p></label>
<input className="form-control" name="Name_with_initials" value={this.state.Name_with_initials} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label"> <p class="fw-bold">Date of Addmission </p></label>
<input type="date" className="form-control" name="date_of_addmission" value={this.state.date_of_addmission} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Class Name </p></label>
<input className="form-control" name="class_name" aria-describedby="emailHelp" value={this.state.class_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Course Name </p></label>
<input className="form-control" name="course_name" aria-describedby="emailHelp" value={this.state.course_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">Date of Birth</p></label>
<input className="form-control" name="date_of_birth" aria-describedby="emailHelp" value={this.state.date_of_birth} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">NIC</p></label>
<input className="form-control" name="nic" aria-describedby="emailHelp" value={this.state.nic} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Email </p></label>
<input className="form-control" name="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Address</p></label>
<input className="form-control" name="address" aria-describedby="emailHelp" value={this.state.address} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Telephone</p></label>
<input className="form-control" name="telephone" aria-describedby="emailHelp" value={this.state.telephone} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gender</p></label>
<input className="form-control" name="gender" aria-describedby="emailHelp" value={this.state.gender} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Religion</p></label>
<input className="form-control" name="religion" aria-describedby="emailHelp" value={this.state.religion} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Nationality</p></label>
<input className="form-control" name="nationality" aria-describedby="emailHelp" value={this.state.nationality} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Name</p></label>
<input className="form-control" name="gurdian_name" aria-describedby="emailHelp" value={this.state.gurdian_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Contact Number</p></label>
<input className="form-control" name="gurdian_contact_number" aria-describedby="emailHelp" value={this.state.gurdian_contact_number} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Email </p></label>
<input className="form-control" name="gurdian_email" aria-describedby="emailHelp" value={this.state.gurdian_email} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Occupation </p></label>
<input className="form-control" name="gurdian_occupation" aria-describedby="emailHelp" value={this.state.gurdian_occupation} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Date</p></label>
<input className="form-control" name="date" aria-describedby="emailHelp" value={this.state.date} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Bank Name </p></label>
<input className="form-control" name="bank_name" aria-describedby="emailHelp" value={this.state.bank_name} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Branch </p></label>
<input className="form-control" name="branch" aria-describedby="emailHelp" value={this.state.branch} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Payment Date </p></label>
<input type="date" className="form-control" name="payment_date" aria-describedby="emailHelp" value={this.state.payment_date} onChange={this.handleInputChange}/>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<center><button type="submit" className="btn btn-secondary btn-lg" onClick={this.onSubmit}>SAVE ALL DETAILS</button></center>
</form>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<h3><p class="fs-5">Are you ready to give?Higher Education is an important topic. Other members found these Giving Funds, Charitable Organizations and Projects aggregated by Giving Compass to be relevant to individuals with a passion for Higher Education.The good news is that consumer insights are also helping us identify scalable solutions. They’re telling us that work-related experiences like internships and apprenticeships significantly increase current student confidence and alumni success and satisfaction.
</p></h3>
</div>
</div>

)
}
}
