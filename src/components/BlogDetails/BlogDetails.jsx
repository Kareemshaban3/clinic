import React from 'react'
import "./BlogDetails.css"
import doctor from "../../img/pic1.d8c3c8e35b95f89900a4s.jpg"
import doctor1 from "../../img/download 3 img.jpeg"
import doctor2 from "../../img/pic2.2c21a722397dfc7d2854s.jpg"
import doctor3 from "../../img/pic5.7eb547294db1e78a2604s.jpg"
import doctor4 from "../../img/download 5 img.jpeg"
import operation from "../../img/pic2.b3958a315dce311a5799.jpg"
import operation1 from "../../img/pic3.299a41762fa0858a67d3.jpg"
import operation2 from "../../img/pic1.ac173f78b519b3024706.jpg"
import { Link } from 'react-router-dom'
import PageChang from "../PageChang/PageChang";

export default function BlogDetails() {
  return (
    <>
      <PageChang title='Blog Details' />

        <section id='BlogDetails' >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 ">
                        <div className="content">
                            <div className="picture">
                                <img src={doctor} alt="" />
                            </div>
                            <div className="title">
                                <div className="img">
                                        <Link to="blogDetails" >   <img src={doctor1} alt="" /></Link>
                                        <Link to="blogDetails" >  <h6>John deo</h6> </Link>
                                </div>
                                <div className="img mx-3 ">
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <h6>21 July 2021</h6>
                                </div>
                             </div>

                             <div className="text">
                                <h2>Precious Tips To Help You Get Better.</h2>
                                <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles</p>
                             </div>
                             
                             <div className="box-shadow">
                                <h2>;;</h2>
                                <h5>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</h5>
                             </div>
                        
                             <div className="pragraf">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                             </div>
                            <div className="row">
                            <div className="col-md-5">
                            <div className="towImge">
                                <img src={doctor2} alt="" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="towImge ">
                                    <img className='towImgTow'  src={doctor3} alt="" />
                                </div>
                            </div>
                            </div>
                             <div className="pragraf">
                                <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                    
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                             </div>

                             <div className="links">
                                <div className="tags">
                                    <h6>Tags :</h6>
                                    <span>Health</span>
                                    <span>Growth</span>
                                    <span>Life</span>
                                </div>
                                <div className="tags">
                                    <h6>Share :</h6>
                                     <Link href="#"><i class="fa-brands fa-facebook"></i></Link>
                                     <Link href="#"><i class="fa-brands fa-twitter"></i></Link>
                                     <Link href="#"><i class="fa-brands fa-linkedin"></i></Link>
                                     <Link href="#"><i class="fa-brands fa-instagram"></i></Link>
                                </div>
                             </div>

                             <div className="comments">
                                <div className="containers">
                                    <div className="display">
                                        <div className="imgSmall">
                                            <img className='big' src={doctor2} alt="" />
                                        </div>
                                        <div className="details">
                                            <h4>Sonar Z. Moyna</h4>
                                            <p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
                                        </div>
                                    </div>
                                    <div className="share">
                                    <Link href="#"><i class="fa-brands fa-facebook"></i></Link>
                                     <Link href="#"><i class="fa-brands fa-twitter"></i></Link>
                                     <Link href="#"><i class="fa-brands fa-linkedin"></i></Link>
                                     <Link href="#"><i class="fa-brands fa-instagram"></i></Link>
                                    </div>
                                </div>

                                <h3>8 Comments</h3>

                                <div className="containers">
                                   <div className="display">
                                   <div className="imgSmall">
                                        <img src={doctor4} alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>George</h4>
                                        <h6>MAY 09, 2021 AT 10:45 AM</h6>
                                    </div>
                                   </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>    
                                    <button>Reply</button>
                                </div>
                                <div className="containers defiant">
                                   <div className="display">
                                   <div className="imgSmall">
                                        <img src={doctor2} alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>Falikaz</h4>
                                        <h6>MAY 09, 2021 AT 10:45 AM</h6>
                                    </div>
                                   </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>    
                                    <button>Reply</button>
                                </div>
                                <div className="containers">
                                   <div className="display">
                                   <div className="imgSmall">
                                        <img src={doctor4} alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>Sonar</h4>
                                        <h6>MAY 09, 2021 AT 10:45 AM</h6>
                                    </div>
                                   </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>    
                                    <button>Reply</button>
                                </div>

                                <div className="containers">
                                   <div className="display">
                                   <div className="imgSmall">
                                        <img src={doctor2} alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>Michel</h4>
                                        <h6>MAY 09, 2021 AT 10:45 AM</h6>
                                    </div>
                                   </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>    
                                    <button>Reply</button>
                                </div>

                                <div className="form">
                                    <h3>Leave a Reply</h3>
                                    <form >
                                        <input type="text" placeholder="Name" />
                                        <input type="text" placeholder="Email" />
                                        <textarea placeholder="Your Message" />
                                        <button type="submit">submit</button>
                                    </form>
                                </div>

                             </div>




                        </div>

                    </div>
                    <div className="col-sm-12 col-md-4 ">
                        <div className="sidebar">

                            <div className="input">
                                <input type="text" placeholder='Enter Your Keywords' />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <div className="post">
                                <h3>Recent Posts</h3>

                                <div className="PublicationsDetails">
                                        <div className="img">
                                            <img src={operation} alt="" />
                                        </div>
                                       <div className="bigText">
                                       <div className="text">
                                            <h6>Precious Tips To Help You Get Better.</h6>
                                        </div>
                                        <div className="icon">
                                             <i class="fa-solid fa-calendar-alt"></i>
                                             <h6>21 July 2021 </h6>
                                        </div>    
                                       </div>
                                </div>
                                <div className="PublicationsDetails">
                                        <div className="img">
                                            <img src={operation1} alt="" />
                                        </div>
                                       <div className="bigText">
                                       <div className="text">
                                            <h6>Ten Doubts You Should Clarify About.</h6>
                                        </div>
                                        <div className="icon">
                                             <i class="fa-solid fa-calendar-alt"></i>
                                             <h6>20 July 2021</h6>
                                        </div>
                                       </div>
                                </div>
                                <div className="PublicationsDetails">
                                        <div className="img">
                                            <img src={operation2} alt="" />
                                        </div>
                                        <div className="bigText">
                                        <div className="text">
                                            <h6>The 10 Steps Needed For Putting.</h6>
                                        </div>
                                        <div className="icon">
                                             <i class="fa-solid fa-calendar-alt"></i>
                                             <h6>19 July 2021</h6>
                                        </div>

                                       </div>
                                </div>
                            </div>

                            <div className="OurGallery">
                                <h3>Our Gallery</h3>

                                <div className="Gallery">
                                    <img src={doctor} alt="" />
                                    <img src={doctor1} alt="" />
                                    <img src={doctor2} alt="" />
                                    <img src={doctor4} alt="" />
                                    <img src={operation} alt="" />
                                    <img src={operation2} alt="" />
                                </div>

                            </div>

                            <div className="Tags">
                                <h3>Tags</h3>

                                <div className="tag">
                                    <button>Improvement</button>
                                    <button>Health</button>
                                    <button>Life</button>
                                    <button>Covid</button>
                                    <button>Health</button>
                                    <button>Growth</button>
                                    <button>Education</button>
                                    <button>Manage</button>
                                    <button>General</button>
                                    
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
