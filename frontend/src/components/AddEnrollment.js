import React, { Component } from 'react'
import axios from 'axios';

export default class AddEnrollment extends Component {

    constructor(props){
        super(props);

        this.state={
            enrollmentCode:"",
            studentId:"",
            SubjectId:"",
            StudentName:"",
            StudentAddress:"",
            dateOfEnroll:""
        }
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

    onSubmit=(e)=>{
        e.preventDefault();

        const {enrollmentCode,studentId,SubjectId,StudentName,StudentAddress,dateOfEnroll} = this.state;

        const data={
            SubjectId:SubjectId,
            StudentName:StudentName,
            enrollmentCode:enrollmentCode,
            studentId:studentId,
            StudentAddress:StudentAddress,
            dateOfEnroll:dateOfEnroll
        }

        console.log(data)

        axios.post("/enrollment/save", data).then((res)=>{
            if(res.data.success){
                alert("Enrollment Added!")
                this.setState(
                    {
                        SubjectId:"",
                        StudentName:"",
                        enrollmentCode:"",
                        studentId:"",
                        StudentAddress:"",
                        dateOfEnroll:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: '45px', marginLeft:'50px'}}>
                    <h1>Add New Enrollment</h1>
                    <h5>Create a New Enrollment and Add to the System</h5>
                </div>
                    <hr/>
                <div className='container' style={{marginTop: '45px'}}>

                <form className="row g-3">

                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Enrollment Code</label>
                        <input className="form-control" name="enrollmentCode"  value={this.state.enrollmentCode} onChange={this.handleChange} required></input>
                    </div>

                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Student ID</label>
                        <input className="form-control" name="studentId" value={this.state.studentId} onChange={this.handleChange} required/>
                    </div>

                    <div className="col-md-4">
                        <label for="inputAddress2" className="form-label">Subject ID</label>
                        <input className="form-control" name="SubjectId" value={this.state.SubjectId} onChange={this.handleChange} required/>
                    </div>

                    <div className="col-md-4">
                        <label for="inputAddress2" className="form-label">Student Name</label>
                        <input className="form-control" name="StudentName" value={this.state.StudentName} onChange={this.handleChange} required/>
                    </div>

                    <div className="col-md-4">
                        <label for="inputAddress2" className="form-label">Student Address</label>
                        <input className="form-control" name="StudentAddress" value={this.state.StudentAddress} onChange={this.handleChange} required/>
                    </div>

                    <div className="col-md-3">
                        <label for="inputCity" className="form-label">Date of Enroll</label>
                        <input type="date" className="form-control" name="dateOfEnroll" value={this.state.dateOfEnroll} onChange={this.handleChange} required/>
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Confirm Details
                        </label>
                        </div>
                    </div>
                    
                </form>
                    <div>
                        <hr/>
                        <button className="btn btn-success" onClick={this.onSubmit}>Add New</button>
                    </div>

                    </div>
            </div>
        )
    }
}
