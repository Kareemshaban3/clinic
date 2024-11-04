import React from 'react'

import {  useNavigate } from 'react-router-dom'
import logo from "../../img/download logo.png"
import "./Login.css"

export default function Login() {
 
    
  const navigate = useNavigate();
  const handleRegister = ()=>{
    navigate('/Register')
  }
  const navigated = useNavigate();
  const handleForget = ()=>{
    navigated('/Forgot')
  }


  return (
    <>
        
        <div>
            <section id='login' >
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <div className="content">
                                <div className="logo text-center ">
                                    <img className='logo' src={logo} alt="" />
                                </div>
                                <form >
                                    <div className="form-control">
                                        <input type="text"  placeholder='User Name' />
                                    </div>
                                    <div className="form-control">
                                        <input type="password"  placeholder='Password' />
                                    </div>
                                    
                                    <button className='login' type='submit'>Login</button>
                                </form>
                              
                                    <h5 className='forgot' onClick={()=>handleForget()} to="forgot">Forgot Password?</h5>
                                    
                                <div className="Register">
                                    <h4>Dont have any account?</h4>
                                    
                                    <button className='register' onClick={()=>handleRegister()} >Register Now </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
     </>
  )
}
