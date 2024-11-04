import React from 'react'
import Not from"../../img/Gemini_Generated_Image_qxlgkmqxlgkmqxlg.jpeg"
import "./NotFound.css"
export default function NotFound() {
  return (
    <>  
    <section id='NotFound'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src={Not} alt="" />
                </div>
                <div className="col-12 text-center">
                    <h1>404 Page Not Found</h1>
                    <p>The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <a href="/" className="btn btn-primary">Go to Home Page</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
