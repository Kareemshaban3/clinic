
import React from "react";
import PageChang from "../PageChang/PageChang";
import "./ServiceDetails.css";
import doctor1 from "../../img/pic1.ac173f78b519b3024706.jpg";
import { Link } from "react-router-dom";

export default function ServiceDetails() {
  return (
    <>
      <PageChang title='Service Details' />
      <section id='ServiceDetails'>
        <div className='container'>
         <div className="row">
          <div className="col-lg-8 col-sm-12">
          <div className='content'>
            <div className='img'>
              <img src={doctor1} alt='' />
            </div>
            <div className='text'>
              <h2>Why Medical Had Been So Popular Till</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>

            <div className='row'>
              <div className='col-sm-12 col-md-6 '>
                <div className='icons'>
                  <div className='icon-group'>
                    <i class='fa-solid fa-check'></i>
                    <h3>Then along come two they</h3>
                  </div>
                  <div className='icon-group'>
                    <i class='fa-solid fa-check'></i>
                    <h3>That’s just a little bit more than</h3>
                  </div>
                  <div className='icon-group'>
                    <i class='fa-solid fa-check'></i>
                    <h3>Standard dummy text ever since</h3>
                  </div>
                  <div className='icon-group'>
                    <i class='fa-solid fa-check'></i>
                    <h3>Simply dummy text of the printing</h3>
                  </div>
                  <div className='icon-group'>
                    <i class='fa-solid fa-check'></i>
                    <h3>Make a type specimen book</h3>
                  </div>
                </div>
              </div>

              <div className='col-sm-12 col-md-6 '>
                <div className="Advanced">
                  <h3>Advanced Technology</h3>
                  <div className="skillBar">
                    <p className="tape"></p>
                    <span>96%</span>
                  </div>
                </div>
                <div className="Advanced">
                  <h3>Certified Engineers</h3>
                  <div className="skillBar">
                    <p className="tape"></p>
                    <span>85%</span>
                  </div>
                </div>
                <div className="Advanced">
                  <h3>6 years Experience</h3>
                  <div className="skillBar">
                    <p className="tape"></p>
                    <span>72%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='Popular'>
              <h2>Popular Questions</h2>
              <p>
                Standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book
              </p>
            </div>
            <div class='accordion accordion-flush' id='accordionFlushExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='flush-headingOne'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#flush-collapseOne'
                    aria-expanded='false'
                    aria-controls='flush-collapseOne'
                  >
                    How Doctor Can Ease Your Pain?
                  </button>
                </h2>
                <div
                  id='flush-collapseOne'
                  class='accordion-collapse collapse'
                  aria-labelledby='flush-headingOne'
                  data-bs-parent='#accordionFlushExample'
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='flush-headingTwo'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#flush-collapseTwo'
                    aria-expanded='false'
                    aria-controls='flush-collapseTwo'
                  >
                    How do I withdraw from a subject?
                  </button>
                </h2>
                <div
                  id='flush-collapseTwo'
                  class='accordion-collapse collapse'
                  aria-labelledby='flush-headingTwo'
                  data-bs-parent='#accordionFlushExample'
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='flush-headingThree'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#flush-collapseThree'
                    aria-expanded='false'
                    aria-controls='flush-collapseThree'
                  >
                    Understand Doctor Before You Regret?
                  </button>
                </h2>
                <div
                  id='flush-collapseThree'
                  class='accordion-collapse collapse'
                  aria-labelledby='flush-headingThree'
                  data-bs-parent='#accordionFlushExample'
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </div>
              </div>
            </div>
            <div class='accordion' id='accordionPanelsStayOpenExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='panelsStayOpen-headingOne'>
                  <button
                    class='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseOne'
                    aria-expanded='true'
                    aria-controls='panelsStayOpen-collapseOne'
                  >
                    What types of systems do you support?
                  </button>
                </h2>
                <div
                  id='panelsStayOpen-collapseOne'
                  class='accordion-collapse collapse show'
                  aria-labelledby='panelsStayOpen-headingOne'
                >
                  <div class='accordion-body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseTwo'
                    aria-expanded='false'
                    aria-controls='panelsStayOpen-collapseTwo'
                  >
                    We Teach You How To Feel Better?
                  </button>
                </h2>
                <div
                  id='panelsStayOpen-collapseTwo'
                  class='accordion-collapse collapse'
                  aria-labelledby='panelsStayOpen-headingTwo'
                >
                  <div class='accordion-body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='panelsStayOpen-headingThree'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseThree'
                    aria-expanded='false'
                    aria-controls='panelsStayOpen-collapseThree'
                  >
                    How Can I Contact You?
                  </button>
                </h2>
                <div
                  id='panelsStayOpen-collapseThree'
                  class='accordion-collapse collapse'
                  aria-labelledby='panelsStayOpen-headingThree'
                >
                  <div class='accordion-body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


          <div className="col-lg-4 col-sm-12 ">
          <div className='content2  '>
            <div className='all-button '>
                <ul>
                   <li>
                        <Link>
                            <span>Engine Diagnostics</span>
                            <i className="fas fa-angle-right"></i>
                        </Link> 
                   </li> 
                   <li>
                        <Link>
                            <span>Belts and Hoses</span>
                            <i className="fas fa-angle-right"></i>
                        </Link> 
                   </li> 
                   <li>
                        <Link>
                            <span>Air Conditioning</span>
                            <i className="fas fa-angle-right"></i>
                        </Link> 
                   </li> 
                   <li>
                        <Link>
                            <span>Brake Repair</span>
                            <i className="fas fa-angle-right"></i>
                        </Link> 
                   </li> 
                   <li>
                        <Link>
                            <span>Tire and Wheel Services</span>
                            <i className="fas fa-angle-right"></i>
                        </Link> 
                   </li> 
                </ul>
            </div>
          </div>
          </div>

         </div>

     
        </div>
      </section>
    </>
  );
}
