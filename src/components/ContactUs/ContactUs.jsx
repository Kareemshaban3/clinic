import React from 'react'
import "./ContactUs.css"
import PageChang from "../PageChang/PageChang"
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <>
      <PageChang title='Contact Us' />

        <section id='ContactUs'>
          <div className="container">
            <div className="Contact">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                    <form>
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                          <input type="number" className="form-control" id="email" placeholder="Enter your Number" />
                        </div>
                        <div className="form-group">
                              <select name="" id="">
                                <option value="">Select your Department</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Pharmacist">Pharmacist</option>
                              </select>
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" />
                        </div>
                        <button type="submit" className="btn">Submit</button>
                      </form>
                </div>
                <div className="col-md-6 col-sm-12 contact2">
                      <div className="background">
                            <div className="detail">
                              <h2>Contact Us For Any <br /> Informations</h2>

                              <div className="icons">
                              <i class="fa-solid fa-map-location-dot"></i>
                              <h3>Location</h3>
                              </div>
                              <p>2005 Stokes Isle Apt. 896, Venaville <br /> 10010, USA</p>
                          
                              <div className="icons">
                              <i class="fa-solid fa-envelopes-bulk"></i>
                              <h3>Email & Phone</h3>
                              </div>
                              <p>info@yourdomain.com <br />
                              (+68) 120034509</p>
                              <div className="icons">
                              <i class="fa-solid fa-globe"></i>
                              <h3>Follow Us</h3>
                              </div>
                              <div className="button">
                                <Link href="#" target="_blank"><i class="fa-brands fa-facebook-square"></i></Link>
                                <Link href="#" target="_blank"><i class="fa-brands fa-twitter-square"></i></Link>
                                <Link href="#" target="_blank"><i class="fa-brands fa-instagram-square"></i></Link>
                              </div>
                            </div>
                      </div>
                </div>
              </div>
                
            </div>
                 <div className="iconDetail">
                <div className="row">
                 <div className="col-sm-12 col-md-3  ">
                    <div className="content one">
                    <i class="fa-solid fa-phone-volume"></i>

                    <h3>Contact Number</h3>

                    <h6>+001 123 456 790</h6>
                    <h6>+002 3424 44 00</h6>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3  ">
                    <div className="content tow">
                    <i class="fa-regular fa-envelope"></i>

                    <h3>Email Address</h3>

                    <h6>info@yourdomain.com</h6>
                    <h6>example@support.com</h6>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3  ">
                    <div className="content three">
                    <i class="fa-solid fa-map-location-dot"></i>

                    <h3>Address</h3>

                    <h6>2005 Stokes Isle Apt. 896, Venaville <br /> 10010, USA</h6>
           
                    </div>
                  </div>
                </div>
                 </div>
          </div>
        </section>
    </>
  )
}
