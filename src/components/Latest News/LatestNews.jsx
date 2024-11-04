import React from 'react'
import Operations1 from "../../img/pic1.ac173f78b519b3024706.jpg"
import Operations2 from "../../img/pic2.b3958a315dce311a5799.jpg"
import Operations3 from "../../img/pic3.89b8315141d75bd31ced (1).jpg"
import Operations4 from "../../img/pic4.28ea761e88293ca4d821s.jpg"
import Operations5 from "../../img/pic5.7eb547294db1e78a2604s.jpg"
import Operations6 from "../../img/pic6.c8e86d3c3a3949ffcec7s.jpg"
import doctor1 from "../../img/download 5 img.jpeg"
import doctor2 from "../../img/download img 4.jpeg"
import doctor3 from "../../img/download 3 img.jpeg"
import doctor4 from "../../img/download image.jpeg"
import doctor5 from "../../img/download 2 img.jpeg"
import doctor6 from "../../img/download (1)img.jpeg"
import { Link } from 'react-router-dom'
import shapes1 from "../../img/download (13).png"
import shapes2 from "../../img/download (12).png"
import shapes3 from "../../img/download (5).png"
import shapes4 from "../../img/download (11).png"
            // Swipes

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import "./LatestNews.css"


export default function LatestNews() {

   
  return (
    <>
       <section id='section'>
       <div className="container">
        <div className="row">
            <div className="col-12 text-center ">
                <h2>Latest News</h2>
                <h3>Our Latest News</h3>
            </div>
        </div>
       <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        className="mySwiper"
        spaceBetween={50}
        breakpoints={{
            1400:{
                slidesPerView: 3,
                spaceBetween: 20,
                 },
            1150:{
                slidesPerView: 2,
                spaceBetween: 10,
                 },
            770:{
                slidesPerView:1,
                spaceBetween: 0,
                },    
        }}
        loop
        >
        <SwiperSlide>
        <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations1} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor1} alt="" /></Link>
                             <Link to="blogDetails" >  <h6>John deo</h6> </Link>
                        </div>
                        <div className="img">
                            <i class="fa-solid fa-calendar-days"></i>
                            <h6>21 July 2021</h6>
                        </div>
                    </div>
                        <div className="text">
                        <Link to="blogDetails" > <p>In this hospital there are special surgeon</p> </Link>
                        </div>
                        <div className="button">
                            <Link to="blogDetails" > <button>Read More <i class="fa-solid fa-chevron-right"></i> </button> </Link>
                        </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>  <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations2} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                        <Link to="blogDetails" >   <img src={doctor2} alt="" /></Link>
                        <Link to="blogDetails" >  <h6>Peter Packer</h6> </Link>
                        </div>
                        <div className="img">
                        <i class="fa-solid fa-calendar-days"></i>
                        <h6>21 July 2021</h6>
                        </div>
                    </div>  
                        <div className="text">
                        <Link to="blogDetails" > <p>Can you get a diflucan prescription online?</p> </Link>
                        </div>
                        <div className="button">
                            <Link to="blogDetails" > <button>Read More <i class="fa-solid fa-chevron-right"></i> </button> </Link>
                        </div>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations3} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                        <Link to="blogDetails" >   <img src={doctor3} alt="" /></Link>
                        <Link to="blogDetails" >  <h6>Sonar Moyna</h6> </Link>
                        </div>
                        <div className="img">
                        <i class="fa-solid fa-calendar-days"></i>
                        <h6>21 July 2021</h6>
                        </div>
                    </div>
                        <div className="text">
                        <Link to="blogDetails" > <p>Why Is Skin Surgeon Considered Underrated</p> </Link>
                        </div>
                        <div className="button">
                            <Link to="blogDetails" > <button>Read More <i class="fa-solid fa-chevron-right"></i> </button> </Link>
                        </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations4} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                        <Link to="blogDetails" >   <img src={doctor4} alt="" /></Link>
                        <Link to="blogDetails" >  <h6>Kalina Mollika</h6> </Link>
                        </div>
                        <div className="img">
                        <i class="fa-solid fa-calendar-days"></i>
                        <h6>21 July 2021</h6>
                        </div>
                    </div>
                        <div className="text">
                        <Link to="blogDetails" > <p>Dental Care for Women is very important</p> </Link>
                        </div>
                        <div className="button">
                            <Link to="blogDetails" > <button>Read More <i class="fa-solid fa-chevron-right"></i> </button> </Link>
                        </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations5} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                        <Link to="blogDetails" >   <img src={doctor5}  alt="" /></Link>
                        <Link to="blogDetails" >  <h6>Michel</h6> </Link>
                        </div>
                        <div className="img">
                        <i class="fa-solid fa-calendar-days"></i>
                        <h6>21 July 2021</h6>
                        </div>
                    </div>
                        <div className="text">
                        <Link to="blogDetails" > <p>Health Will Be A Thing Of The Past And Here's Why</p> </Link>
                        </div>
                        <div className="button">
                            <Link to="blogDetails" > <button>Read More <i class="fa-solid fa-chevron-right"></i> </button> </Link>
                        </div>
                </div>
            </div>
        
        </SwiperSlide>

        <SwiperSlide>
        <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations6} className='img-hight'  alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                        <Link to="blogDetails" >   <img src={doctor6}  alt="" /></Link>
                        <Link to="blogDetails" >  <h6>Michel</h6> </Link>
                        </div>
                        <div className="img">
                        <i class="fa-solid fa-calendar-days"></i>
                        <h6>21 July 2021</h6>
                        </div>
                    </div>
                        <div className="text">
                        <Link to="blogDetails" > <p>Health Will Be A Thing Of The Past And Here's Why</p> </Link>
                        </div>
                        <div className="button">
                            <Link to="blogDetails" > <button>Read More <i class="fa-solid fa-chevron-right"></i> </button> </Link>
                        </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
     </div>
        <img  className='shapes1' src={shapes1} alt="" />
        <img className='shapes2'  src={shapes3} alt="" />
        <img className='shapes3'  src={shapes2} alt="" />
        <img className='shapes4'  src={shapes4} alt="" />
       </section>
    </>
  )
}
