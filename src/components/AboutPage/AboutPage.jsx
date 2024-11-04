import React from 'react'
import PageChang from "../PageChang/PageChang"
import About from '../About/About'
import Experience from '../Experience/Experience'
import LatestNews from '../Latest News/LatestNews'
import Testimonial from '../Testimonial/Testimonial'
import "./AboutPage.css"

import doctor from '../../img/pic2.2c21a722397dfc7d2854s.jpg'
import doctor2 from '../../img/member3.0d822ecc51b2532abe0e.jpg'
import doctor3 from '../../img/member1.22ac1d594f69ddaf3e08.jpg'
import kafer from '../../img/download (1).png'
import kafer2 from '../../img/download (2).png'
export default function AboutPage() {
  return (
    <>
   <PageChang 
    title="About Us"
   />
    <About/>
    <Experience/>
    <section id='doctor'>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                    <div className="content text-center">
                    <div className="img-big">
                        <img  className='doctor' src={doctor3} alt="" />
                        <div className="img-small">
                        <img className='kafer' src={kafer} alt="" />
                        <img className='kafer2' src={kafer2} alt="" />
                        </div>
                        </div> 
                        <h2>Dr. Addition Smith</h2>
                        <h3>Dentist</h3>
                        <div className="button">
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="content text-center">
                       <div className="img-big">
                        <img  className='doctor' src={doctor} alt="" />
                        <div className="img-small">
                        <img className='kafer' src={kafer} alt="" />
                        <img className='kafer2' src={kafer2} alt="" />
                        </div>
                        </div> 
                        <h2>Dr. Addition Smith</h2>
                        <h3>Dentist</h3>
                        <div className="button">
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="content text-center">
                <div className="img-big">
                        <img  className='doctor' src={doctor2} alt="" />
                        <div className="img-small">
                        <img className='kafer' src={kafer} alt="" />
                        <img className='kafer2' src={kafer2} alt="" />
                        </div>
                        </div> 
                        <h2>Dr. Addition Smith</h2>
                        <h3>Dentist</h3>
                        <div className="button">
                        <button><i class="fa-brands fa-twitter"></i></button>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Testimonial/>
    <LatestNews/>
    </>
  )
}
