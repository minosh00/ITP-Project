import React, { Component } from 'react'
import axios from 'axios';

export default class SubStdView extends Component {

    constructor(props){
        super(props);
      
        this.state = {
          subjects:[]
        };
      
      }
      
      
      componentDidMount(){
        this.retrieveSubjects();
      }
      
      
      retrieveSubjects(){
        axios.get("/subjectclient").then(res=>{
          if(res.data.success){
            this.setState({
              subjects:res.data.existingSubjects //attention here*****
            });
      
            console.log(this.state.subjects)
          }
        })
      }

      onDelete=(id)=>{
        axios.delete(`/subjectclient/delete/${id}`).then((res)=>{
          alert("Deleted Succesfully!");
          this.retrieveSubjects();
        })
      }

    render() {
        return (
            <div>
              <div style={{marginBottom: '45px', marginLeft:'50px'}}>
                <h1>Client Preview</h1>
                <h5>You Can Edit Client View Here</h5>
            </div >

            <hr/>

              <div  className='container'>
                <table className='table table-borderless'>
                    <tbody>
                        {this.state.subjects.map((subjects, index)=>(
                        <tr style={{fontSize:'18px'}}>   
                            <td style={{width:'150px',}}>{subjects.subjectName}</td>
                            <td style={{width:'500px'}}>{subjects.subjectDes}</td>
                            <td style={{width:'150px', textAlign:'center'}}>{subjects.subjectFee}</td>
                            <td style={{width:'150px',}}>
                                <a className="btn btn-warning" onClick={()=>this.onDelete(subjects._id)}>
                                <i className="far fa-trash-alt"></i>&nbsp;<b>Remove From Client</b>&nbsp;
                                </a>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
              </div>
            </div>
        )
    }
}
