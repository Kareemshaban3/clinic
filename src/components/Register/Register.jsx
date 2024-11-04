import React from 'react'
import {  useNavigate } from 'react-router-dom'
import logo from "../../img/download logo.png"

export default function Register() {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/Login')
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
                                        <input type="text"  placeholder=' Name' />
                                    </div>
                                    <div className="form-control">
                                        <input type="email"  placeholder='Email' />
                                    </div>
                                    <div className="form-control">
                                        <input type="text"  placeholder='User Name' />
                                    </div>
                                    <div className="form-control">
                                        <input type="password"  placeholder='Password' />
                                    </div>
                                    
                                    <button className='login' type='submit'> Register Now</button>
                                </form>
                              
                                    
                                <div className="Register">
                                    <h4>Already have an account?</h4>
                                    
                                  <button className='register'  onClick={()=>handleLogin()} >Login</button>
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
