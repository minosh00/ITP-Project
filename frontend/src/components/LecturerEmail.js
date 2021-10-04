
import emailjs from "emailjs-com";
import background from '../images/pic33.jpg';
import { Link } from 'react-router-dom';
const LecturerEmail = () => {
function sendEmail(e) {

   
    e.preventDefault();

    emailjs.sendForm(
      "service_18gdtkh",
      "template_udyfyyk",
      e.target,
      "user_ME7v5ffY74WUjxSxumOCr"
    ).then(res=>{
        console.log(res);
        alert("Your email send successfully!");
    }).catch(err=> console.log(err));
  }

  return (
   
    <div className="container">
     <form onSubmit={sendEmail} >

<div class="card" style={{ width: "50%", marginLeft: "25%" ,
marginTop:'20px',backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>

  <center><h4 class="card-header"> <b>Send Confirmation E-mail To Lecturers</b></h4></center>
  <div class="card-body">
    
        <label><b>Name</b></label>
        <input name="name" className="form-control" />
        <br></br>
        <label><b>E-mail</b></label>
        <input type="email" name="user_email"   className="form-control" />
        <br></br>
        <label><b>Message</b></label>
        <textarea name="message" rows="4" className="form-control" />
     
    <br></br>
    </div>
     
        <button type="submit" class="btn btn-info" ><i class="fas fa-envelope-square"></i> <b>Send Email</b></button>
        </div>
    </form>

     </div>
  
    
  );
};

export default LecturerEmail;

