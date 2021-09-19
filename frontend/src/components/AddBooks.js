
import axios from 'axios';
import React, { useState } from 'react'
import {Link} from "react-router-dom";

const AddBooks = ({books}) => {


  //delete

  const [book, setBook ]=useState([])

   const deteleBook = id =>{
     axios.delete(`http://localhost:8000/addBook/${id}`)
     .then(res => alert(res.data))
     setBook(book.filter(elem => elem._id !== id))
   }

    return (
           <div> 
             
              

            <div className="container">
              <br></br>
              <h1>All Books</h1>
          <table className="table">
          <thead>
<tr>
  <th scopse="col">#</th>
  <th scopse="col">Book ID</th>
  <th scopse="col">Book Name</th>
  <th scopse="col">Author</th>
  <th scopse="col">Category</th>
  <th scopse="col">Number of Copies</th>
  <th scopse="col">Actions</th>
</tr>
</thead>

              <tbody> 
              {books.map((AddBooks,index)=>(                                
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                      <td><Link to ={{
                              pathname:`/addBook/${AddBooks._id}`
                             }}>{AddBooks.Book_Id}</Link></td>
                             
                      <td>{AddBooks.Book_Name}</td>
                      <td>{AddBooks.Author}</td>
                      <td>{AddBooks.Category}</td>
                      <td>{AddBooks.No_of_Copies}</td>
           
                      <td> 
                      <Link to ={{
        pathname:`/update/${AddBooks._id}`
      }}>
       <button type="button" class="btn btn-success" style={{marginTop:'10px'}} > <i class="fas fa-search"></i>Update</button>&nbsp;
    </Link>
  
    <button onClick={()=>deteleBook(AddBooks._id)}deleteBoo type="button" class="btn btn-danger" style={{marginTop:'10px'}} > <i class="fas fa-search"></i>&nbsp;Delete </button>
 
    
    
    </td>                    
                  </tr>
                  ))}

              </tbody>  

            </table>

               </div>
               
    </div>
    )
}

export default AddBooks
