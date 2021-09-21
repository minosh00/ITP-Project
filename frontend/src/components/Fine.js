import axios from 'axios';
import React,{ useState } from 'react'
import {Link} from "react-router-dom";

const Fine = ({PayFines}) => {

    const [Fine, setFine ]=useState([])

    const deteleFine = id =>{
      axios.delete(`http://localhost:8000/fines/${id}`)
      .then(res => alert(res.data))
      setFine(Fine.filter(elem => elem._id !== id))
    }
 

    return (
        <div>
             <div className="container">
              <br></br>
             <center> <h1>All Fines</h1></center> <br></br>
          <table className="table">
          <thead>
<tr className="text-info bg-dark">
  <th scopse="col">#</th>
  <th scopse="col">NIC</th>
  <th scopse="col">Book Name</th>
  <th scopse="col">Author</th>
  <th scopse="col">Fines</th>
  <th scopse="col">Return Date</th>
  <th scopse="col">Actions</th>
</tr>
</thead>

              <tbody> 
              {PayFines.map((Fines,index)=>(                                
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td><Link to ={{
                              pathname:`/disafines/${Fines._id}` 
                             }}>{Fines.NIC}</Link></td>
                                                         
                      <td>{Fines.Book_Name}</td>
                      <td>{Fines.Author}</td>
                      <td>{Fines.Fines}</td>
                      <td>{Fines.Return_Date}</td>
                     
                      <td> 
       
    <button onClick={()=>deteleFine(Fines._id)}deleteBook type="button" class="btn btn-danger" style={{marginTop:'10px'}} > <i class="fas fa-search"></i>&nbsp;Delete </button>
 
    
    
    </td> 
                   
                  </tr>
                  ))}

              </tbody>  

            </table>

               </div>

        </div>
    )
}

export default Fine
