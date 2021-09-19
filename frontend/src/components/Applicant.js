import React from 'react'

const Applicant = ({Applicants}) => {
    return (
        <div>
             <div className="container">
              <br></br>
              <h1>All Books</h1>
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
                  
                  </tr>
                  ))}

              </tbody>  

            </table>

               </div>
        </div>
    )
}

export default Applicant
