import React ,{useState,useEffect,useRef  }from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const Course =  (props) => {
   
    const[courseID , setCourseID] = useState("");
    const[courseName , setCourseName] = useState("");
    const[courseType , setcourseType] = useState("");
    const[description , setDescription] = useState("");
    const[requirement , setRequirement] = useState("");
    const[price , setprice] = useState("");
    const[duration , setDuration] = useState("");
    const[message, setMessage] =useState('');

   useEffect(() => {
        axios.get(`http://localhost:8000/courses/${props.match.params.id}`)

        .then(res =>[

            setCourseID(res.data.courseID),
            setCourseName(res.data.courseName),
            setcourseType(res.data.setcourseType),
            setDescription(res.data.description),
            setRequirement(res.data.requirement),
            setprice(res.data.price),
            setDuration(res.data.duration)


        ])

        .catch(error =>console.log(error))
          
         },[props]);



    return (



        <MainContainer  >
   <table id="table-to-xls"  >
       <h2>Course Information&nbsp;&nbsp;<i class="far fa-bookmark"></i></h2>

      
       <br></br>
       <br></br>

      <h4><i class="fas fa-portrait"></i> &nbsp;Course ID : {courseID}</h4>
      <br></br>
       <h4><i class="fas fa-book-open"></i>&nbsp;Course  Name : {courseName}</h4>
       <br></br>
     
     
       <h4><i class="fas fa-comment-medical"></i> &nbsp;Description :&nbsp;&nbsp;<br/><br/>{description}</h4>
       <br></br>
       <h4><i class="fas fa-key"></i>&nbsp;Requirement :&nbsp;{requirement}</h4>
       <br></br>
       <h4><i class="fas fa-users"></i>&nbsp;Category :&nbsp;{price}</h4>
       <br></br>
       <h4><i class="far fa-calendar-times"></i>&nbsp;Duration :&nbsp;{duration}</h4>
       <br></br>
       <h4><i class="far fa-credit-card"></i>&nbsp;Price :&nbsp;{price}</h4>
     </table>
     
      <div>
        <br></br>
      <div />
   
  
     <button> <ReactHTMLTableToExcel id="test-table-xls-button"
                    className="btn btn-warning"
                   
                    table="table-to-xls"
                    filename="CourseInformstion"
                    sheet="tablexls"
                    
                    buttonText="Download as XLSheet"/></button>
                    
    </div> 
    <br></br>
      <Link  to="/" type="button" class="btn btn-success"><i class="fas fa-arrow-circle-left"></i>&nbsp;Back</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ={{
        pathname:`/allCourse`
      }}>
    <button type="button" class="btn btn-primary">&nbsp;🔑Enroll</button>
    </Link>
    







        </MainContainer>
    )



}







export default Course

const  MainContainer = styled.div`

  margin: 7rem 0;
  padding:4rem 14rem;
  h2{

  text-align:center;
  font-weight:
}
h4{
    color:red

}

`;
