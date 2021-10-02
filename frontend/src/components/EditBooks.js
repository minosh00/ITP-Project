import React , {useState , useEffect}from 'react'
import styled from'styled-components';
import axios from 'axios';

const EditBooks = props => {

const[Book_Id, setBook_Id] = useState("");
const[Book_Name , setBook_Name] = useState("");
const[Author, setAuthor] = useState("");
const[Category, setCategory] = useState("");
const[No_of_Copies, setNo_of_Copies] = useState("");


 const changeOnClick = e =>{
     e.preventDefault();

     const addbook ={
        Book_Id,
        Book_Name ,
        Author,
        Category,
        No_of_Copies

     };

     setBook_Id("");
     setBook_Name("");
     setAuthor('');
     setCategory('');
     setNo_of_Copies('');
     
     axios.put(`http://localhost:8000/addbook/update/${props.match.params.id}`,addbook)
     .then(res=>alert(res.data))
     .catch(err=>{console.log(err);
     });
 };

 useEffect(()=>{
  axios.get(`http://localhost:8000/addBook/${props.match.params.id}`)
  .then(res=>[
      setBook_Id(res.data.Book_Id),
      setBook_Name(res.data.Book_Name),
      setAuthor(res.data.Author),
      setCategory(res.data.Category),
      setNo_of_Copies(res.data.No_of_Copies)
  ])
  .catch(err => console.log(err));
},[]);

    return (
        <AddBooksContainer>
        <div className="container">
          <center> 
              <h1>Update The Details </h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">

            <br/>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="Book_Id">Book Id</label>
            <input type="text" 
            onChange={e => setBook_Id(e.target.value)}
            value={Book_Id}
            className="form-control"  
            placeholder="Book Id" />


            </div>

            <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Book_Name ">Book Name</label>
            <input type="text"
             onChange={e => setBook_Name(e.target.value)}
             value={Book_Name}
            className="form-control"  
            placeholder="Book Name" />
            </div>
        </div>

            <br/>

        <div className="form-group col-md-6">
            <label htmlFor="Author">Author</label>
            <input type="text"
            onChange={e => setAuthor(e.target.value)}
            value={Author} 
            className="form-control"  
            placeholder="Author" />
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="Category">Book Category</label>
            <select  
            onChange={e => setCategory(e.target.value)} 
            value={Category}
            className="form-control">
            <option selected>Applied Mathematics</option>
            <option>Arts</option>
            <option>Biology </option>
            <option>Bussiness Studies</option>
            <option>Chemistry</option>
            <option>Dancing</option>
            <option>Dictionary</option>
            <option>Electronics</option>
            <option>Encyclopiedia</option>
            <option>History</option>
            <option>Information Technology</option>
            <option>Languages</option>
            <option>Marketing</option>
            <option>Mathematics</option>
            <option>Music</option>
            <option>Phycis</option>
            <option>Programming Languages</option>
            <option>Pure Mathematics</option>
            <option>Religion</option>
            <option>Robotics</option>
            <option>Statistics</option>
            </select>
          </div>

          <br/>

          <div className="form-group col-md-6">
            <label htmlFor="No_of_Copies">Number of Copies</label>
            <input type="text" 
            onChange={e => setNo_of_Copies(e.target.value)} 
            value={No_of_Copies}
            className="form-control"  
            placeholder="Number of Copies" />
          </div>
        
            
         <br/>
        
        
       
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </center>
    
      </div>
      </AddBooksContainer>
    )
}

export default EditBooks

const AddBooksContainer = styled.div`
     
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