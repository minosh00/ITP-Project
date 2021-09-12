import React, { Component } from 'react'
import axios from 'axios'

export default class MarkStudentattendance extends Component {
   
    constructor(props){
        super(props);

        this.onChangelecturerid= this.onChangelecturerid.bind(this);
        this.onChangelecname = this.onChangelecname.bind(this);
        this.onChangesubjectorcourse = this.onChangesubjectorcourse.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangecount = this.onChangecount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state={
            lecturerid:'',
            lecname:'',
            subjectorcourse:'',
            date:'',
            count:''
        
        }
    }



    onChangelecturerid(e) {
        this.setState({ lecturerid: e.target.value })
    }

    onChangelecname(e) {
        this.setState({ lecname: e.target.value })
    }

    onChangesubjectorcourse(e) {
        this.setState({ subjectorcourse: e.target.value })
    }

    onChangedate(e) {
        this.setState({ date: e.target.value })
    }

    onChangecount(e) {
        this.setState({ count: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            lecturerid: this.state.lecturerid,
            lecname: this.state.lecname,
            subjectorcourse: this.state.subjectorcourse,
            date: this.state.date,
            count: this.state.count
        };

        axios.post('/studentattend/insert', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        
        alert("Insert Successfull!")
        this.setState({ lecturerid:'',
        lecname:'',
        subjectorcourse:'',
        date:'',
        count:''})
    }

   
    render() {
        return (           
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Mark Student Attendaces</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>lecturer ID</label>
                    <input type="text"
                    className="form-control"
                    name="lecturerid"
                    placeholder="enter lecturer Id"
                    value={this.state.lecturerid}
                    onChange={this.onChangelecturerid}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Lecturer Full Name</label>
                    <input type="text"
                    className="form-control"
                    name="lecname"
                    placeholder="enter Full lecname"
                    value={this.state.lecname}
                    onChange={this.onChangelecname}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Subject or Course</label>
                    <input type="text"
                    className="form-control"
                    name="subjectorcourse"
                    placeholder="enter subject or course"
                    value={this.state.subjectorcourse}
                    onChange={this.onChangesubjectorcourse}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Date</label>
                    <input type="text"
                    className="form-control"
                    name="date"
                    placeholder="enter date"
                    value={this.state.date}
                    onChange={this.onChangedate}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>count</label>
                    <input type="text"
                    className="form-control"
                    name="count"
                    placeholder="enter count"
                    value={this.state.count}
                    onChange={this.onChangecount}/>
                </div>


                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Mark Student attendance
                </button>



            </form>
            
        </div>
          
        )
    }
}
