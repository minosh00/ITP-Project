import React, { Component } from 'react'
import  './Homefooter.css'

export default class Adminhomefooter extends Component {
  
  
    render() {
        return (
            <div >
     <footer className="site-footer bg-light text-dark" style={{fontSize:'20px'}}>
      <div >
        <div className="row">
          <div className="col-sm-6 col-md-3">
           
          </div>

          <div className="col-xs-9 col-md-4">
            <h6 style={{color:'black'}}>Categories</h6>
            <ul className="footer-links">
              <li><a href="/">A/L subjects</a></li>
              <li><a href="/">O/L subjects</a></li>
              <li><a href="/">After A/L subjects</a></li>
              <li><a href="/">After O/L subjects</a></li>
              <li><a href="/">About us</a></li>
              <li><a href="/">Payment</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6 style={{color:'black'}}>Payments</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr ></hr>
      </div>
      <div >
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by<br/><a href="/">Royal-Edu Institute </a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
            <li><a class="facebook" href="www.facebook.com"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="www.twitter.com"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="www.dribbble.com"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</div>   
        )
    }
}
