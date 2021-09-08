import React, { Component } from 'react'
import axios from 'axios';

export default class EditSub extends Component {

    constructor(props){
        super(props);

        this.state={
            subjectId:"",
            subjectName:"",
            subjectType:"",
            subjectCategory:"",
            subjectFee:"",
            subjectDes:""
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
        const {subjectId,subjectName,subjectType,subjectCategory,subjectFee,subjectDes} = this.state;

        const data={
            subjectId:subjectId,
            subjectName:subjectName,
            subjectType:subjectType,
            subjectCategory:subjectCategory,
            subjectFee:subjectFee,
            subjectDes:subjectDes
        }

        console.log(data)

        axios.put(`/subject/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Subject Updated!")
                this.setState(
                    {
                        subjectId:"",
                        subjectName:"",
                        subjectType:"",
                        subjectCategory:"",
                        subjectFee:"",
                        subjectDes:""
                    })
            }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/subject/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    subjectId:res.data.subject.subjectId,
                    subjectName:res.data.subject.subjectName,
                    subjectType:res.data.subject.subjectType,
                    subjectCategory:res.data.subject.subjectCategory,
                    subjectFee:res.data.subject.subjectFee,
                    subjectDes:res.data.subject.subjectDes
                });

                console.log(this.state.subject);
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Edit Subject Details</h2>
                    <h5>Edit Subject Details Here</h5>
                    <hr/>
                </div>
                <div style={{marginTop: '45px'}}>
                <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Subject ID</label>
    <input type="text" className="form-control" name="subjectId"  value={this.state.subjectId} onChange={this.handleInputChange}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Subject Name</label>
    <input type="text" className="form-control" name="subjectName" value={this.state.subjectName} onChange={this.handleInputChange}/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">Subject Fee</label>
    <input type="text" className="form-control" name="subjectFee" value={this.state.subjectFee} onChange={this.handleInputChange}/>
  </div>
   <div className="col-md-8">
    <label for="inputCity" className="form-label">Description</label>
    <input type="text" className="form-control" style={{width:'600px'}} name="subjectDes" value={this.state.subjectDes} onChange={this.handleInputChange}/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress" className="form-label">Subject Type</label>
    <select type="text" className="form-control" name="subjectType" value={this.state.subjectType} onChange={this.handleInputChange} >
    <option>Choose</option>
    <option>Group Class</option>
    <option>Mass Class</option>
    <option>Special</option>
    </select>    
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">Subject Category</label>
    <select className="form-control" name="subjectCategory" value={this.state.subjectCategory} onChange={this.handleInputChange}>
      <option>Choose</option>
      <option>Ordinary Level</option>
      <option>Advanced Level</option>
    </select>
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
