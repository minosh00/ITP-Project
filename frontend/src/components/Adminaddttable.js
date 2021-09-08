import React, { Component } from 'react'
import axios from 'axios';


export default class Adminaddttable extends Component {
  
    constructor(props) {
        super(props)

        this.onChangeTimeTableID = this.onChangeTimeTableID.bind(this);
        this.onChangeSubjectorCourse = this.onChangeSubjectorCourse.bind(this);
        this.onChangeMonthandDate = this.onChangeMonthandDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            timetableID:'',
            subjectORcourse:'',
            monthANDdate:'',
            time:''
        }
    }

    onChangeTimeTableID(e) {
        this.setState({ timetableID: e.target.value })
    }

    onChangeSubjectorCourse(e) {
        this.setState({ subjectORcourse: e.target.value })
    }

    onChangeMonthandDate(e) {
        this.setState({ monthANDdate: e.target.value })
    }

    onChangeTime(e) {
        this.setState({ time: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            timetableID: this.state.timetableID,
            subjectORcourse: this.state.subjectORcourse,
            monthANDdate: this.state.monthANDdate,
            time: this.state.time,
        };

        axios.post('/timetables/insert', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        
        alert("Insert Successfull!")
        this.setState({ timetableID:'',
        subjectORcourse:'',
        monthANDdate:'',
        time:''})
    }
 

    render() {
        return (
            <div className="wrapper">
                <lable><h3 style={{color:'green'}}><u>Add New Time Table</u></h3></lable><br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label><h5>Time Table ID</h5></label>
                        <input type="text" value={this.state.timetableID} onChange={this.onChangeTimeTableID} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label><h5>Subject or Course</h5></label>
                        <input type="text" value={this.state.subjectORcourse} onChange={this.onChangeSubjectorCourse} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label><h5>Month and Date</h5></label>
                        <input type="text" value={this.state.monthANDdate} onChange={this.onChangeMonthandDate} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label><h5>Time</h5></label><br/>
                        <input type="text" value={this.state.time} onChange={this.onChangeTime} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add time table" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }

}
