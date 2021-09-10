import React, { Component } from 'react'
import axios from 'axios';

export default class EditCourseFollowpdf extends Component {

    constructor(props){
        super(props);

        this.state={
            fullName:"",
            email:"",
            courseName:"",
            nic:"",
         
        }
    }
    
    handleInputChange=(e)=>{
        const{name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const id = this.props.match.params.id;
        const {fullName,email,courseName,nic} = this.state;

        const data={
            fullName:fullName,
            email:email,
            courseName:courseName,
            nic:nic
       
        }

        console.log(data)

     
      
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/retrivecourse/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    fullName:res.data.buyCourse.fullName,
                    email:res.data.buyCourse.email,
                    courseName:res.data.buyCourse.courseName,
                    nic:res.data.buyCourse.nic,
                   
                });

                console.log(this.state.buyCourse);
            }
        });
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: '45px', marginLeft:'50px'}}>
                    <h1>Edit Subject Details</h1>
                    <h5>Edit Subject Details Here</h5>
                </div>

                <hr/>

                <div className='container' style={{marginTop: '45px'}}>
                <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Subject ID</label>
    <input className="form-control" name="fullName"  value={this.state.fullName} onChange={this.handleInputChange}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Subject Name</label>
    <input className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange}/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">Subject Fee</label>
    <input className="form-control" name="courseName" value={this.state.courseName} onChange={this.handleInputChange}/>
  </div>
   <div className="col-md-8">
    <label for="inputCity" className="form-label">Description</label>
    <input className="form-control" style={{width:'600px'}} name="nic" value={this.state.nic} onChange={this.handleInputChange}/>
  </div>
 
 

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Confirm Details
      </label> 
    </div>
  </div>
  <div>
    <hr/>
    <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Confirm Edits</button>
  </div>
</form>
</div>
</div>
        )
    }
}
