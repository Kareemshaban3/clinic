import React from 'react'
import PageChang from "../PageChang/PageChang";
import "./Booking.css"
export default function Booking() {
  return (
    <>
        <PageChang 
        title="Booking"
        />
    <section id='Booking' >
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="content">
                    <form>
                        <h1>Book Appointment</h1>
                        <div className="form-group">
                            <select name="" id="">
                                <option value="">Selecty Department</option>
                                <option value="1">one</option>
                                <option value="2">tow</option>
                                <option value="3">there</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select name="" id="">
                                <option value="">Select Doctor</option>
                                <option value="1">one</option>
                                <option value="2">tow</option>
                                <option value="3">there</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="email" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" id="phone" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" id="phone" placeholder="" />
                        </div>
                        <button>Appointment Now</button>
                    </form>
                    </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}
