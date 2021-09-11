import React, { Component } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';

export default class EditCourseFollowpdf extends Component {

    constructor(props){
        super(props);

        this.state={
            fullName:"",
            email:"",
            courseName:"",
            nic:""
        }
    }
    
    handleInputChange=(e)=>{
        const{name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/buycourse/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    fullName:res.data.buycourse.fullName,
                    email:res.data.buycourse.email,
                    courseName:res.data.buycourse.courseName,
                    nic:res.data.buycourse.nic,
                   
                });

                console.log(this.state.buycourse);
            }
        });
    }

    createAndDownloadPdf = () => {
      axios.post('/create-pdfcourse', this.state)
        .then(() => axios.get('/fetch-pdfcourse', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
          saveAs(pdfBlob, 'course.pdf');
        })
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
    <input className="form-control" name="fullName"  value={this.state.fullName} onChange={this.handleInputChange} readOnly/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Subject Name</label>
    <input className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} readOnly/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">Subject Fee</label>
    <input className="form-control" name="courseName" value={this.state.courseName} onChange={this.handleInputChange} readOnly/>
  </div>
   <div className="col-md-8">
    <label for="inputCity" className="form-label">Description</label>
    <input className="form-control" style={{width:'600px'}} name="nic" value={this.state.nic} onChange={this.handleInputChange} readOnly/>
  </div>
 
  <div>
  </div>
</form>
<hr/>
    <button className="btn btn-success" onClick={this.createAndDownloadPdf}>Download</button>

</div>
</div>
        )
    }
}
