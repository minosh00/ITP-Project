import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);
  
    this.state ={
      posts:[]
      };
    }
    
componentDidMount(){
  this.retrievePosts();
}


    retrievePosts(){
      axios.get("http://localhost:8000/posts").then(res => {
        if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
          });
          console.log(this.state.posts)
        }
      });
    }
  
    onDelete = (id) =>{
        axios.delete(`/post/delete/${id}`).then((res) =>{
            alert("Deleted Successfully");
            this.retrievePosts();
        })
    }



    filterData(posts,searchKey){
        const result = posts.filter((post) =>
        post.student_full_name.toLowerCase().includes(searchKey)||
        post.Name_with_initials.toLowerCase().includes(searchKey)||
        post.nic.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})
    }
  
  handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value
  
      axios.get("/posts").then(res => {
          if(res.data.success){
           this.filterData(res.data.existingPosts,searchKey) 
          }
        });
  }
  


    render() {
      return (
        <div>
          <p class="fs-4">Student Management System</p>
          <h2> <p class="fs-2"> Display Student Details</p></h2>
           
          
          <table>
            <tr>
              <td>        
                <input style={{width:'400px'}} className="form-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}></input>
              </td>
              <td>
              </td>
            </tr>
          </table>
          
          <table class="table table-success table-striped table-bordered" style={{marginTop:'45px'}}>
          <thead>
              <tr>
              <th scope = "col">INDEX NO</th>
               <th scope = "col">STUDENT FULL NAME</th>
                <th scope = "col">INITIALS </th>
                <th scope = "col">DATE OF ADDMISSION </th>
                <th scope = "col"> CLASS NAME</th>
                <th scope = "col"> COURSE NAME</th>
                <th scope = "col"> DATE OF BIRTH</th>
                <th scope = "col"> NIC</th>
                <th scope = "col"> EMAIL</th>
                <th scope = "col"> ADDRESS</th>
                <th scope = "col">TELEPHONE </th>
                <th scope = "col"> GENDER</th>
                <th scope = "col"> RELIGION</th>
                <th scope = "col"> NATIONALITY</th>
                <th scope = "col"> GURDIAN NAME</th>
                <th scope = "col"> GURDIAN CONTACT NUMBER</th>
                <th scope = "col"> GURDIAN EMAIL</th>
                <th scope = "col"> GURDIAN OCCUPATION</th>
                <th scope = "col"> DATE</th>
                <th scope = "col"> BANK NAME</th>
                <th scope = "col">BRANCH</th> 
                <th scope = "col"> PAYMENT DATE</th>
                <th scope = "col"> ACTION</th>
                <th scope = "col"></th>
              </tr>
          </thead>
         
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr>
            <td scope="row">{index+1}</td>
            <td>{posts.student_full_name}</td>
            <td>{posts.Name_with_initials}</td>
            <td>{posts.date_of_addmission}</td>
            <td>{posts.class_name}</td>
            <td>{posts.course_name}</td>
            <td>{posts.date_of_birth}</td>
            <td>{posts.nic}</td>
            <td>{posts.email}</td>
            <td>{posts.address}</td>
            <td>{posts.telephone}</td>
            <td>{posts.gender}</td>
            <td>{posts.religion}</td>
            <td>{posts.nationality}</td>
            <td>{posts.gurdian_name}</td>
            <td>{posts.gurdian_contact_number}</td>
            <td>{posts.gurdian_email}</td>
            <td>{posts.gurdian_occupation}</td>
            <td>{posts.date}</td>
            <td>{posts.bank_name}</td>
            <td>{posts.branch}</td>
            <td>{posts.payment_date}</td>
  
                <td>
  
                    <a className="btn btn-secondary" href= {`/addstudent/${posts._id}`}>
                    <i className="fas fa-edit" ></i>&nbsp;Approved
                    </a>
                    
  
                </td>
                <td> 
                <a className="btn btn-danger"  href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        
        </div>
      )
    }
  }
  
  
