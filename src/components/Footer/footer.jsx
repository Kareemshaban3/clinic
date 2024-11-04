import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../img/download logo.png"
import facebook from "../../img/download (16) fac.png"
import instagram from "../../img/instagram.png"
import twitter from "../../img/twitter.png"
import linkedin from "../../img/linkedin.png"
import place from "../../img/download (1).png"
import "./Footer.css"




export default function Footer() {

    const location = useLocation() ;

    const isLoginPage = location.pathname === '/Login' ;
    const isForgot = location.pathname === "/Forgot";
    const isRegister = location.pathname === "/Register";
  
  return (
<>
    { !isForgot && !isRegister  && !isLoginPage && (
            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 ">
                        <img className='logo' src={logo} alt="" />
                        <div className="text">
                            <h4>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</h4>
                        </div>
                        <div className="contact">
                            <div className="icon">
                            <i className='fa fa-phone' ></i>
                            </div>
                        <div className="number">
                            <h4>Contact Us</h4>
                            <p>+01030707552</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <h5>Quick Links</h5>
                      <div className="links">
                           <ul>
                                <li><Link to="">About Us</Link></li>
                                <li><Link to="">Services</Link></li>
                                <li><Link to="">Booking</Link></li>
                                <li><Link to="">Faq's</Link></li>
                                <li><Link to="">Blogs</Link></li>
                                <li><Link to="">Out Team</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <h5>Our Service </h5>
                      <div className="links">
                           <ul>
                                <li><Link to="">Dental Care</Link></li>
                                <li><Link to="">Cardiac Clinic</Link></li>
                                <li><Link to="">Massage Therapy</Link></li>
                                <li><Link to="">Cardiology</Link></li>
                                <li><Link to="">Precise Diagnosis</Link></li>
                                <li><Link to="">Massage Therapy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 ">
                        <h5>Subscribe</h5>
                        <form>
                            <input type="email" placeholder="Enter Your Email" />
                            <button type="submit">Subscribe Now</button>
                            <div className="icon">
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                                <img src={instagram} alt="" />
                                <img src={linkedin} alt="" />
                            </div>
                        </form>
                        <img className='move' src={place} alt="" /> 
                    </div>
                </div>
            </div>
        </footer>
    ) }
</>

)
}
