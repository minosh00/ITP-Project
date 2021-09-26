import React, { useState } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

const Applicant = ({Applicants}) => {

const [Applicant, setApplicant ]=useState([])

const deteleApplicant = id =>{
  axios.delete(`http://localhost:8000/applicants/${id}`)
  .then(res => alert(res.data))
  setApplicant(Applicant.filter(elem => elem._id !== id))
}
    return (
        <div>
             <div className="container">
              <br></br>
              <h1>All Applicants</h1>
          <table className="table">
          <thead>
<tr>
  <th scopse="col">#</th>
  <th scopse="col">NIC</th>
  <th scopse="col">First Name</th>
  <th scopse="col">Last Name </th>
  <th scopse="col">Address</th>
  <th scopse="col">Email</th>
  <th scopse="col">Category</th>
  <th scopse="col">Action</th>
</tr>
</thead>

              <tbody> 
              {Applicants.map((Applicants,index)=>(                                
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                      <td>{Applicants.NIC}</td>
                      <td>{Applicants.First_Name}</td>
                      <td>{Applicants.Last_Name}</td>
                      <td>{Applicants.Address}</td>
                      <td>{Applicants.Email}</td>
                      <td>{Applicants.Student_category}</td>
                      <td> 
                      <Link to ={{
        pathname:`/addtolibray/${Applicants._id}`
      }}>
       <button type="button" class="btn btn-success" style={{marginTop:'10px'}} > <i class="fas fa-search"></i>Accept</button>&nbsp;
    </Link>
    <button onClick={()=>deteleApplicant(Applicants._id)}deteleApplicant type="button" class="btn btn-danger" style={{marginTop:'10px'}} > <i class="fas fa-search"></i>&nbsp;Delete </button>
</td>




                  </tr>
                  ))}

              </tbody>  

            </table>

               </div>
        </div>
    )
}

export default Applicant
