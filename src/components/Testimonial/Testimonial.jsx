import React from 'react'
import "./testimonial.css"
import doctor1 from "../../img/download (1)img.jpeg"
import doctor2 from "../../img/download 2 img.jpeg"
import doctor3 from "../../img/download 3 img.jpeg"
import doctor4 from "../../img/download 5 img.jpeg"
import doctor5 from "../../img/download image.jpeg"
import doctor6 from "../../img/download img 4.jpeg"
import background from "../../img/background.png"
import share from "../../img/download (6).png"
import circle from "../../img/circl.png"
import photo from "../../img/download (1).png"
import photo2 from "../../img/download (13).png"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';


export default function Testimonial() {
    
  return (
   <>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center ">
                <h2>Testimonial</h2>
                </div>
                <div className="col-12 text-center ">
                    <h1>See What Are The Patients <br />
                    Saying About us</h1>
                </div>
                <div className="col-md-6 text-center">
                    <div className="background">
                        <img src={background} alt="" />
                    <ul>
                        <li><Link><img src={doctor6} alt="" /></Link></li>
                        <li><Link><img src={doctor1} alt="" /></Link></li>
                        <li><Link><img src={doctor2} alt="" /></Link></li>
                        <li><Link><img src={doctor4} alt="" /></Link></li>
                        <li><Link><img src={doctor3} alt="" /></Link></li>
                        <li><Link><img src={doctor5} alt="" /></Link></li>
                        <li><Link><img src={share} alt="" /></Link></li>
                        <li><Link><img src={circle} alt="" /></Link></li>
                        <li><Link><img src={photo} alt="" /></Link></li>
                        <li><Link><img src={photo2} alt="" /></Link></li>
                    </ul>
                    </div>
                </div>


                

                        <div className="col-md-6 swipe ">
                        <Swiper 
                            spaceBetween={50}
                            slidesPerView={1}

                            modules={[Autoplay]}
                            autoplay={{ 
                                delay: 4000, 
                                disableOnInteraction:false, 
                            }}
                            loop
                        >
                            <SwiperSlide >
                                <div class="box">
                                    <div class="box-header">
                                    <i className='fas fa-quote-left' ></i>
                                    </div>
                                    <div class="box-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel semper eros, in bibendum nisi. Nullam quis ipsum eget ex convallis scelerisque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non mi vel sapien faucibus consectetur vel ac lectus.</p>
                                    </div>
                                    <div class="box-footer">
                                        <h3>john deo</h3>
                                        <h5>patient</h5>
                                    </div>
                                </div>
                                    </SwiperSlide>
                            <SwiperSlide><div class="box">
                                    <div class="box-header">
                                    <i className='fas fa-quote-left' ></i>
                                    </div>
                                    <div class="box-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel semper eros, in bibendum nisi. Nullam quis ipsum eget ex convallis scelerisque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non mi vel sapien faucibus consectetur vel ac lectus.</p>
                                    </div>
                                    <div class="box-footer">
                                        <h3>john deo</h3>
                                        <h5>patient</h5>
                                    </div>
                                </div></SwiperSlide>
                            <SwiperSlide><div class="box">
                                    <div class="box-header">
                                    <i className='fas fa-quote-left' ></i>
                                    </div>
                                    <div class="box-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel semper eros, in bibendum nisi. Nullam quis ipsum eget ex convallis scelerisque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non mi vel sapien faucibus consectetur vel ac lectus.</p>
                                    </div>
                                    <div class="box-footer">
                                        <h3>john deo</h3>
                                        <h5>patient</h5>
                                    </div>
                                </div></SwiperSlide>
                            <SwiperSlide><div class="box">
                                    <div class="box-header">
                                    <i className='fas fa-quote-left' ></i>
                                    </div>
                                    <div class="box-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel semper eros, in bibendum nisi. Nullam quis ipsum eget ex convallis scelerisque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non mi vel sapien faucibus consectetur vel ac lectus.</p>
                                    </div>
                                    <div class="box-footer">
                                        <h3>john deo</h3>
                                        <h5>patient</h5>
                                    </div>
                                </div>
                            </SwiperSlide>

                            
                        </Swiper>

                </div>
            </div>
        </div>
    </section>
   </>
  )
}
