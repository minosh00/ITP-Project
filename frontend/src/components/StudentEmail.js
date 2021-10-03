
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';
import pic4 from '../images/pdf.jpg';
const StudentEmail = () => {
  function sendEmail(e) {


    e.preventDefault();

    emailjs.sendForm(
      "service_vpxw0tg",
      "template_nmvgp8s",
      e.target,
      "user_vorScJNN0PFeTqKO9dOgS"
    ).then(res => {
      console.log(res);
      alert("email send success");
    }).catch(err => console.log(err));
  }


  return (
    <div className="container">
      <form className="row" onSubmit={sendEmail} >

        <img src={pic4} style={{ width: '100px', height: '100%' }}></img>

        <div class="card">
          <h4 class="card-header">Send Email Students</h4>
          <div class="card-body">
            <h6 class="card-title">Send Email :</h6>
            <label>name</label>
            <input type="" name="stdname" className="form-control" />

            <label>Email</label>
            <input type="email" name="user_email" className="form-control" />

            <label>Message</label>
            <textarea name="message" rows="4" className="form-control" />

            <br></br>
          </div>

          <button type="submit" class="btn btn-danger"><i class="far fa-envelope"></i>&nbsp;Send Email</button>
        </div>



      </form>

    </div>

  );
};

export default StudentEmail;

