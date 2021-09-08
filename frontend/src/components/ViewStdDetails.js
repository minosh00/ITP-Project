import React, { Component } from 'react';
import axios from 'axios';
import background from '../images/pic33.jpg';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
 
export default class ViewStdDetails extends Component {

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
                <h2><p class="fs-1">View Student Details</p></h2>
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
                    <ReactHTMLTableToExcel
                    className="btn btn-secondary fas fa-file"
                    style={{textDecoration:'none', color:'white'}}
                    table="table-to-xls"
                    filename="Students Report"
                    sheet="tablexls"
                    buttonText=" Download Report"/>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="container">   
                <p class="fs-5">Giving Compass is a one-stop shop to help individual donors learn about issues.
                 get involved, and give to community-led change.
                 In the US, 80% of giving to nonprofits comes from individuals (Giving USA)
                 While the amount we give is important, how we give also matters.
                 We guide donors toward practices that advance equity and address the root causes of society's issues.
                We embrace fresh ideas, forward thinking, and fast improvements.
                We are accountable to our mission and to delivering a public benefit.
                We are driven by the desire to do the right thing.We believe in the power of elevating diverse voices and representing the breadth and depth of work in our sector.
                We’re motivated by the joy of giving and spreading it.
                </p>
                </div>
                </div>
               
            )
    }
}