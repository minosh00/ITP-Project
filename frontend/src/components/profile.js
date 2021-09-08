import React, { Component } from 'react';
import axios from 'axios';
import background from '../images/pic33.jpg';

export default class profile extends Component {

    constructor(props){
        super(props);

        this.state={
            posts:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/Approved/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    posts:res.data.post
                });

                console.log(this.state.posts);
            }
        });
    }



    render() {
        
            const{registrationNo,student_full_name,Name_with_initials,class_name,course_name,nic,email,telephone,date_of_addmission,gender,address,gurdian_name} = this.state.posts;
            return (
                
                <div style={{marginTop:'20px',backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
                <p class="fs-4">Student Management System</p>
                <div className="container">
                 <h1><p class="fs-1">  Student Profile </p></h1>
                &nbsp;&nbsp;            

                
                <table className="table" id="table-to-xls">
                   
                <tr>
                            <th scope="col">Registation Number</th>
                            <td>{registrationNo}</td>
                        </tr>
                        <tr>
                            <th scope="col">Student Full Name</th>
                            <td>{student_full_name}</td>
                        </tr>
                        <tr>
                            <th scope="col">Name With Initials</th>
                            <td>{Name_with_initials}</td>
                        </tr>
                        <tr>
                            <th scope="col">Class Name</th>
                            <td>{class_name}</td>
                        </tr>
                        <tr>
                            <th scope="col">Course Name</th>
                            <td>{course_name}</td>
                        </tr>
                        <tr>
                            <th scope="col">Student NIC</th>
                            <td>{nic}</td>
                        </tr>
                        <tr>
                            <th scope="col">Student Email</th>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <th scope="col">Contact Number</th>
                            <td>{telephone}</td>
                        </tr>
                        <tr>
                            <th scope="col">Date Of Addmission</th>
                            <td>{date_of_addmission}</td>
                        </tr>
                        <tr>
                            <th scope="col">Gender</th>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <th scope="col">Student Address</th>
                            <td>{address}</td>
                        </tr>
                        <tr>
                        <th scope="col">Gurdians Name</th>
                        <td>{gurdian_name}</td>
                        </tr>
                        &nbsp;&nbsp;
                    </table>
                    <div className="container">   
                <p class="fs-5">If you need  Edit some details which were included in your Student Registration form?And You can click this button as well.
                </p>
                </div>
                    <a className="btn btn-secondary" href={`/stdEdit/${this.props.match.params.id}`}><i className="fas fa-edit" ></i>&nbsp;Update Details</a>
                    
                <div className="container">   
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p class="fs-5">If you need Generate a report about your details?And You can click this button as well.
                </p>
                </div>
                 
                    <a className="btn btn-danger" href={`/stdPdf/${this.props.match.params.id}`}><i className="fas fa-file" ></i>&nbsp;Generate PDF</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                
                </div>
               
            )
    }
}