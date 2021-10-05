import React, { Component } from 'react'
import axios from 'axios';

export default class LecSalary extends Component {
    
    constructor(props){
        super(props);
        
        
        this.state={
            dulaleaverequests:[]
        };
    }
    
     componentDidMount(){
         this.retrivedulaleaverequests();
      
     }
  
    retrivedulaleaverequests(){
      axios.get('/approvedleaverequests')
          .then(response => this.setState({ dulaleaverequests:response.data.existingapprovedleaves }))
          .catch(error => {
              this.setState({ errorMessage: error.message });
              console.error('There was an error!', error);
          });
  }


  
  filterData(dulaleaverequests,searchKey){
    const result = dulaleaverequests.filter((dulaleaverequests) =>
    dulaleaverequests.lecId.toLowerCase().includes(searchKey)||
    dulaleaverequests.name.toLowerCase().includes(searchKey)
   
    )
    this.setState({dulaleaverequests:result})
  }
  
  
  
   handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
       
    axios.get("/approvedleaverequests").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingleaveDUlaRequests,searchKey)
        }
    });
  
  }
  
     
    
    render() {
        return (
            <div>
                 <div className="container-xxl">
               <center><h2 style={{textDecoration:'none', color:'#800080'}}><b><u>Salary Calculation for Lecturers</u></b></h2></center>
                </div>
                <br/><br/>
                <div className="col-lg-9 mt-2 mb-2">
                     <input
                            className="form-control"
                            type="search"
                            placeholder="Search here for the Payments you did for the courses"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                     </input>
                </div>
                <br/><br/>
                <div className="container-xxl">              
                <table className="table table-success table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lecturer ID</th>
                            <th scope="col">Lecturer Name</th>
                            <th scope="col">Begin Date</th>
                            <th scope="col">Return Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Pay or No Pay</th>
                            <th scope="col">Calculate Salary</th>
                          </tr>
                    </thead>
               <tbody>
                {this.state.dulaleaverequests.map((dulaleaverequests,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{dulaleaverequests.lecId}</td>
                           <td>{dulaleaverequests.name}</td>
                           <td>{dulaleaverequests.beginDate}</td>
                           <td>{dulaleaverequests.returnDate}</td>
                           <td>{dulaleaverequests.reason}</td>
                           <td>{dulaleaverequests.email}</td>
                           <td>{dulaleaverequests.Cnumber}</td>
                           <td>{dulaleaverequests.PayORnoPay}</td>
                           <td>
                                       <a  className="btn btn-warning" href={`/calculatesalry/${dulaleaverequests._id}`} style={{textDecoration:'none', color:'black'}}>
                                        <i><b>Calculate Salary</b></i>
                                       </a>
                                     
                                   </td>
                   </tr>  
                ))}
                </tbody>
                </table>
                   
               </div>
            </div>
        )
    }
}
