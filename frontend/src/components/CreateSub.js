import React, { Component } from 'react'
import axios from 'axios';

export default class CreateSub extends Component {

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
            ...this.setState,
            [name]:value
        })
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })


    

    onSubmit=(e)=>{
        e.preventDefault();

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

        axios.post("/subject/save", data).then((res)=>{
            if(res.data.success){
                alert("Subject Added!")
                this.setState(
                    {
                        subjectId:"",
                        subjectName:"",
                        subjectType:"",
                        subjectCategory:"",
                        subjectFee:"",
                        subjectDes:""
                    }
                )
            }
        })
    }


    render() {

        return (

            <div className='container'>
                <div>
                    <h2>Add New Subject</h2>
                    <h5>Create a New Subject and Add to the System</h5>
                    <hr/>
                </div>

                <div style={{marginTop: '45px'}}>

                <form className="row g-3 needs-validation" novalidate>

                  <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">Subject ID</label>
                    <input type="text" className="form-control" name="subjectId"  value={this.state.subjectId} onChange={this.handleChange} required/>
                    <div className="invalid-feedback">
                      Insert Subject ID!
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Subject Name</label>
                    <input type="text" className="form-control" name="subjectName" value={this.state.subjectName} onChange={this.handleChange} required/>
                    <div className="invalid-feedback">
                    Insert Subject Name!
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Subject Fee</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" className="form-control" name="subjectFee" value={this.state.subjectFee} onChange={this.handleChange} required/>
                      <div className="invalid-feedback">
                      Insert Subject Fee!
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">Subject Type</label>
                    <select type="text" className="form-select" name="subjectType" value={this.state.subjectType} onChange={this.handleInputChange} required>
                      <option selected disabled value="">Choose...</option>
                      <option>Group Class</option>
                      <option>Mass Class</option>
                      <option>Special</option>
                    </select>
                    <div className="invalid-feedback">
                      Insert Subject Category!
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">Subject Category</label>
                    <select type="text" className="form-select" name="subjectCategory" value={this.state.subjectCategory} onChange={this.handleInputChange} required>
                      <option selected disabled value="">Choose...</option>
                      <option>Ordinary Level</option>
                      <option>Advanced Level</option>
                    </select>
                    <div className="invalid-feedback">
                      Insert Subject Category!
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="validationCustom05" className="form-label">Description</label>
                    <textarea className="form-control" name="subjectDes" value={this.state.subjectDes} onChange={this.handleChange} required/>
                    <div className="invalid-feedback">
                      Please Insert Subject Description!
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                      <label className="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>

                  <div>
                    <hr/>
                    <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Add New</button>
                </div>

                </form>

                    </div>
            </div>
            
        )
    }
}

