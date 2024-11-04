import React from "react";
import "./pageChange.css"
import { Link } from "react-router-dom";

import shape1 from "../../img/download (5).png"
import shape2 from "../../img/download (14).png"

const sec =({title}) => {
return (
    <>
    
        <section id='PageBanner' >
        <h1>
        {title}
        
        </h1>
        <br />
        <Link to="/" > <button> <i class="fa-solid fa-house"></i> Home / {title}</button> </Link>
        <div className="shape">
            <img className="shape1" src={shape1} alt="" />
            <img  className="shape2"  src={shape2} alt="" />
            <img  className="shape3"  src={shape2} alt="" />
        </div>
    </section>

    </>
    )
}

export default sec;