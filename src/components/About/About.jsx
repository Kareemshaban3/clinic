import React from 'react'
import doctor1 from "../../img/pic-1.ad1ed7ee8284087fe9ee.jpg"
import doctor2 from "../../img/pic-2.0593bc2fd8a13cf8c19f.jpg"
import doctor3 from "../../img/pic-3.fa689b1037dbf69567a3.jpg"
import shapes1 from "../../img/download (13).png"
import shapes2 from "../../img/download (12).png"
import shapes3 from "../../img/download (6).png"
import { Link, useNavigate } from 'react-router-dom'
import "./about.css"


export default function About() {
    const navigator = useNavigate()
    let goAbout=()=>{
      navigator("/about")
    }
    
  return (

        <section id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-imge">
                            <ul>
                                <li><img src={doctor1} alt="" /></li>
                                <li><img src={doctor2} alt="" /></li>
                                <li><img src={doctor3} alt="" /></li>
                                <li>
                                    <div className="about-contact">
                                        20
                                        <span>Year Experience</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <img className='shape1' src={shapes1} alt="" />
                    <div className="big-about">
                    <div className="text">
                        <h2>About Us</h2>
                        <h3>The Great Place Of Medical Hospital Center</h3>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                        </div>
                        
                            <button><i class="fa-solid fa-truck-medical"></i> <span>Emergency Help</span></button>
                            <button><i class="fa-solid fa-bed-pulse"></i> <span>Qualified Doctors</span></button>
                 
                            <button><i class="fa-solid fa-droplet"></i> <span>Best Professionals</span></button>
                            <button><i class="fa-solid fa-syringe"></i> <span>Medical Treatment</span></button>
                        <button className='read ' ><Link onClick={()=>goAbout()}  >Read More</Link></button>
                        <img className='shape3' src={shapes3} alt="" />
                        <img className='shape2' src={shapes2} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </section>

  )
}
