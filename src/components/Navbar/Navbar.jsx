import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../img/download logo.png"

export default function Navbar() {

  const location = useLocation()
  
  const isLoginPage = location.pathname === '/Login' ;
  const isForgot = location.pathname === "/Forgot";
  const isRegister = location.pathname === "/Register";

  let navigator = useNavigate()
  let goContact = ()=>{
    navigator("/Login")
  }
  
  return (
    <>
      {!isLoginPage && !isForgot  && !isRegister &&(
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid  ">
          <Link className="navbar-brand  " href="#">
           <img src={logo} alt="" />
           </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link  " aria-current="page" to="home" >Home</Link>
              </li>
             
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Pages
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="about">About Us</Link></li>
                  <li><Link className="dropdown-item" to="ourTeam">Our Team</Link></li>
                  <li><Link className="dropdown-item" to='FAQ'>FAQ's</Link></li>
                  <li><Link className="dropdown-item" to='Booking'>Booking</Link></li>
                  <li><Link className="dropdown-item" href="#">Error 404</Link></li>
                  <li><Link className="dropdown-item" to="Login">Login / Register</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="PageServices">Services</Link></li>
                  <li><Link className="dropdown-item" to="ServiceDetails">Services Detail</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Blog
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="Blog">Blog</Link></li>
                  <li><Link className="dropdown-item" to="BlogDetails">Blog Detail</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="ContactUs">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><i className='fa fa-search' ></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><i className='fa fa-phone'></i> (+01) 999 888 777</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><button onClick={()=>goContact()} >Contact Us <i class="fa-solid fa-chevron-right"></i> </button></Link>
              </li>
      
            </ul>
          </div>
        </div>
      </nav>
      )}


   </>
  )
}
