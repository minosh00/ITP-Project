import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';

const AddFine = () => {
    
  const [NIC, setNIC] = useState("");
  const[Book_Name , setBook_Name] = useState("");
  const[Author, setAuthor] = useState("");
  const[Return_Date, setReturn_Date]= useState("");
  const[Fines , setFines]=useState("")
  
  const changeOnClick = f =>{
    //f.preventDefault();

    const addfine={
      NIC,
      Book_Name,
      Author,
      Return_Date,
      Fines
    };
  

  axios.post("http://localhost:8000/fines/addfine",addfine)
  .then(res=>alert(res.data))
  .catch(err=>{console.log(err);
  });
};
  return (
        <AddFinesContainer>
          <div className="container">
            <center>

              <h1>Add a New Fine</h1>
          <form onSubmit={changeOnClick} encType="multipart/form-data">

  <div className="form-row">

    <div className="form-group col-md-6">
    <label htmlfor="NIC">NIC</label>
    <input type="text" 
    onChange={f => setNIC(f.target.value)}
    className="form-control"  
    placeholder="NIC"/>
    </div>


    <div className="form-group col-md-6">
      <label htmlfor="Book_Name">Book Name</label>
      <input type="text" 
      onChange={f=> setBook_Name(f.target.value)}
      className="form-control" 
      placeholder="Name of The Book " />
      </div>
    
      <div className="form-group col-md-6">
      <label htmlfor="setAuthor">Author</label>
      <input type="text" 
      onChange={f=> setAuthor(f.target.value)}
      className="form-control" 
      placeholder="Author" />
      </div>
  </div>

  <div className="form-group col-md-6">
    <label htmlfor="Return_Date">Return Date</label>
    <input type="date"
    onChange={f=>setReturn_Date(f.target.value)} 
    className="form-control"  />
    </div>

  <div className="form-group col-md-6">
    <label htmlfor="Fines">Fines</label>
    <input type="text"
    onChange={f=>setFines(f.target.value)} 
    className="form-control"  
    placeholder="Fines" />
  </div>

 <br/>
 <br/>

  
  <button type="submit" className="btn btn-primary">Add </button>
</form> 
</center>.

            </div>
        </AddFinesContainer>
    )
}

export default AddFine

const AddFinesContainer = styled.div`
     
h1{
     font-wight: 1000;
     color :var(--blue);
}
.btn-primary{
    background: var(--blue);
    border:none;
    &:hover{
        background: var(--light-blue);
    }
    
}
`;