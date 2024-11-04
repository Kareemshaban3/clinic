import React from 'react'
import doctor from "../../img/doctor.7c2bc96d67d3eba1d64a.png"
import share from "../../img/download (6).png"
import circle from "../../img/circl.png"
import photo from "../../img/download (1).png"
import imag from "../../img/download (14).png"
import { Link, useNavigate } from 'react-router-dom'
import "./Home.css";

import About from '../About/About'
import WorkingProcess from '../WorkingProcess/WorkingProcess'
import ServicesSwip from '../ServicesSwip/ServicesSwip'
import Testimonial from "../Testimonial/Testimonial"
import LatestNews from '../Latest News/LatestNews'

export default function Home() {
  const navigator = useNavigate()
  let goAbout=()=>{
    navigator("/about")
  }

  return (
    <>
     <header id='header'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 qq ">
           <div className="contact">
            <img className='photo' src={circle} alt="" />
           <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And <br /> Take Care To Of Your <br /> Health</h2>
            <Link  onClick={()=>goAbout()}  > <button>Read More</button></Link>
            <img className='peals' src={imag} alt="" />
           </div>
          </div>
          <div className="col-md-6 col-lg-6 ">  
            <img className='photo' src={photo} alt="" />
            <img src={doctor} alt="" />
            <img className='photo' src={share} alt="" />
          </div>
        </div>
      </div>
     
     </header>
     <About />
    <WorkingProcess/>
    <ServicesSwip/>
    <Testimonial/>
    <LatestNews/>
    </>
  )
}
