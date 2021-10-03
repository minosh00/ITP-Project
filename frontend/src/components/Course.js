import React ,{useState,useEffect,useRef  }from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";
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


    function  pdfGenerat (){
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        
        doc.autoTable({
            styles: { fillColor: [255, 0, 0] },
            columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } }, 
            margin: { top: 10 },
                body: [
                    [{ content: ' Course Details  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
                  ],
                })
            autoTable(doc, { html: '#tt' })
           doc.save('CourseINFO.pdf')
            }

    
            

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
   <table id="tt">
       <h2>Course Information&nbsp;&nbsp;<i class="far fa-bookmark"></i></h2>

      
       <br></br>
       <br></br>

       <dl className="row"  >
<dt className="col-sm-3"><i class="fas fa-portrait"></i>&nbsp; Course ID</dt>
<dd className="col-sm-9">{courseID}</dd>

<dt className="col-sm-3"><i class="fas fa-book-open"></i>&nbsp;Course  Name</dt>
<dd className="col-sm-9"> {courseName}</dd>

<dt className="col-sm-3"><i class="fas fa-comment-medical"></i> &nbsp; Description</dt>
<dd className="col-sm-9">{description}</dd>

<dt className="col-sm-3"><i class="fas fa-key"></i>&nbsp; Requirement</dt>
<dd className="col-sm-9">{requirement}</dd>




<dt className="col-sm-3"><i class="far fa-credit-card"></i>&nbsp; Price </dt>
<dd className="col-sm-9">{price}</dd>


<dt className="col-sm-3"><i class="far fa-calendar-times"></i>&nbsp; Duration</dt>
<dd className="col-sm-9">{duration}</dd>
</dl>
</table>
      <div />
   
  
      <button className="btn btn-danger btn-sm"  onClick={pdfGenerat}>Generate  PDF</button>
      <br></br><br></br>
      <ReactHTMLTableToExcel 
                 className="btn btn-info"
                 table="tt"
                 filename="Course Details "
                 sheet="sheet"
                 buttonText="Download XLsheet"

                 
                 / >

             <br></br>
   
    <br></br>
      <Link  to="/" type="button" class="btn btn-success"><i class="fas fa-arrow-circle-left"></i>&nbsp;Back</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     







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
