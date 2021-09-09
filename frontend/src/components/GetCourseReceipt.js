import React, { Component } from 'react'
import axios from 'axios';

export default class GetCourseReceipt extends Component {
    
    constructor(props){
        super(props);

        this.state={
            buyCourse:[]
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/buycourse/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    buyCourse:res.data.buycourse
                });

                console.log(this.state.buyCourse);
            }
        });
    }


    
    render() {
        const{ fullName,email,courseName,date} = this.state.buyCourse;
        return (
            
            <div style={{marginTop:'20px'}}>
            <p class="fs-4"><center><h3><b>Your Course Receipt</b></h3></center></p>
            <div className="container">
             <p class="fs-1"><h5><u>Your payment details for the course</u></h5></p>
            &nbsp;&nbsp;            


            <table className="table" id="table-to-xls">
               
            <tr>
                        <th scope="col">Full Name</th>
                        <td>{fullName}</td>
                    </tr>
                    <tr>
                        <th scope="col">Email</th>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <th scope="col">Course Name</th>
                        <td>{courseName}</td>
                    </tr>
                    <tr>
                        <th scope="col">Date</th>
                        <td>{date}</td>
                    </tr>
                    
                       
                  
                    &nbsp;&nbsp;
                </table>
                
                <a className="btn btn-primary" href={`/detailsreceipt/${this.props.match.params.id}`}>Generate PDF</a>
            </div>
               
            </div>
           
        )
    }
}
