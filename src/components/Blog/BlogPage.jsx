import React from 'react'
import PageChang from '../PageChang/PageChang'
import { Link } from 'react-router-dom'
import Operations1 from "../../img/pic1.ac173f78b519b3024706.jpg"
import Operations2 from "../../img/pic2.b3958a315dce311a5799.jpg"
import Operations3 from "../../img/pic3.89b8315141d75bd31ced (1).jpg"
import Operations4 from "../../img/pic4.28ea761e88293ca4d821s.jpg"
import Operations5 from "../../img/pic5.7eb547294db1e78a2604s.jpg"
import Operations6 from "../../img/pic6.c8e86d3c3a3949ffcec7s.jpg"
import Operations7 from "../../img/pic1.b7a9e70ea7c20a4d2cb4s.jpg"
import Operations8 from "../../img/pic1.d8c3c8e35b95f89900a4s.jpg"
import Operations9 from "../../img/pic-1.ad1ed7ee8284087fe9ee.jpg"
import doctor1 from "../../img/download 5 img.jpeg"
import doctor7 from "../../img/download 5 img.jpeg"
import doctor8 from "../../img/download img 4.jpeg"
import doctor2 from "../../img/download img 4.jpeg"
import doctor3 from "../../img/download 3 img.jpeg"
import doctor9 from "../../img/download 3 img.jpeg"
import doctor4 from "../../img/download image.jpeg"
import doctor5 from "../../img/download 2 img.jpeg"
import doctor6 from "../../img/download (1)img.jpeg"
import "./BlogPage.css"

export default function BlogPage() {
  return (
   <>
   <PageChang
   title="Blog Grid 3"
   />
    
    <section id='blog' >
        <div className="container">
            <div className="row">
                
                <div className="col-sm-12 col-md-6 col-lg-4 ">
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations2} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor2} alt="" /></Link>
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations3} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor3} alt="" /></Link>
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations4} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor4} alt="" /></Link>
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations5} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor5} alt="" /></Link>
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations6} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor6} alt="" /></Link>
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations7} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor7} alt="" /></Link>
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations8} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor8} alt="" /></Link>
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
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="card">
                <div className="card-img">
                    <Link to="blogDetails" > <img src={Operations9} className='img-hight' alt="" /></Link>
                </div>
                <div className="card-body">
                    <div className="title">
                        <div className="img">
                            <Link to="blogDetails" >   <img src={doctor9} alt="" /></Link>
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
                </div>
                <div className="col-12   text-center pt-5 ">
                    <div className="pagination">
                            <button className='deferent' >Prev</button>
                            <button  >1</button>
                            <button>2</button>
                            <button>3</button>
                            <button className='deferent' >Next</button>
                    </div>
                </div>
            </div>
        </div>
    </section>


   </>
  )
}
