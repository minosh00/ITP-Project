import React, { Component } from 'react'
import axios from 'axios';
export default class Createspecialevent extends Component {


    constructor(props){
        super(props);
        this.state={
            eventID:"",
            eventname:"",
            venue:"",
            date:"",
            time:""
        }
    }


    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {eventID,eventname,venue,date,time} = this.state;

        const data ={
            eventID:eventID,
            eventname:eventname,
            venue:venue,
            date:date,
            time:time
        }
          console.log(data)

          axios.post(`/events/insert`,data).then((res)=>{
            if(res.data.success){
                alert("New special event added succssfully!")
                this.setState(
                    {
                        eventID:"",
                        eventname:"",
                        venue:"",
                        date:"",
                        time:"" 
                    }
                )
            }
        })



    }





    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Add new special event</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Event ID</label>
                    <input type="text"
                    className="form-control"
                    name="eventID"
                    placeholder="enter Event Id"
                    value={this.state.eventID}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Event Name</label>
                    <input type="text"
                    className="form-control"
                    name="eventname"
                    placeholder="enter Event Name"
                    value={this.state.eventname}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Venue</label>
                    <input type="text"
                    className="form-control"
                    name="venue"
                    placeholder="enter Venue"
                    value={this.state.venue}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Date</label>
                    <input type="text"
                    className="form-control"
                    name="date"
                    placeholder="enter Date"
                    value={this.state.date}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{margineBottom:'5px'}}>Time</label>
                    <input type="text"
                    className="form-control"
                    name="time"
                    placeholder="enter Time"
                    value={this.state.time}
                    onChange={this.handleInputChange}/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp;save
                </button>



            </form>
            
        </div>
        )
    }
}
