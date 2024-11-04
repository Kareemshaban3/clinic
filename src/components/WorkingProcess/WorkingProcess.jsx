import React from 'react'
import "./WorkingProcess.css"
import { Link, useNavigate } from 'react-router-dom'

import shape1 from "../../img/circl12.png"
import shape2 from "../../img/plas.png"
import shape3 from "../../img/download (5).png"
import shape4 from "../../img/download (14).png"
export default function WorkingProcess() {
    const navigate = useNavigate();

    let goBooking =() => {
        navigate('/Booking')
    }
  return (
   <>
        <section id='working' >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center ">
                        <h2>Working Process</h2>
                        <h3>How we works?</h3>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 between ">
                        <div className="content">
                            <h4>01</h4>
                            <h5>Make Appointmnet</h5>   
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of.
                            </p>
                            <Link ><button onClick={()=>goBooking()} >View More <i class="fa-solid fa-chevron-right"></i> </button></Link>
                        </div>                        
                    </div>

                    <div className="col-md-6 col-lg-4 col-sm-12   ">
                        <div className="content deferent ">
                                <h4>02</h4>
                                <h5>Take Treatment</h5>   
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of.
                                </p>
                                <Link  ><button onClick={()=>goBooking()} >View More <i class="fa-solid fa-chevron-right"></i> </button></Link>
                            </div> 
                    </div>

                    <div className="col-md-6 col-lg-4 col-sm-12  between ">
                        <div className="content">
                                <h4>03</h4>
                                <h5>Registration</h5>   
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of.
                                </p>
                                <Link  ><button onClick={()=>goBooking()} >View More <i class="fa-solid fa-chevron-right"></i> </button></Link>
                            </div> 
                    </div>
                </div>
            </div>
            <div className="shape">
                <img className='shape1' src={shape1} alt="" />
                <img className='shape2' src={shape2} alt="" />
                <img className='shape3' src={shape3} alt="" />
                <img className='shape4' src={shape4} alt="" />
            </div>
        </section>
   </>
  )
}
