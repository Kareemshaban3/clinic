import React from 'react'
import logo from "../../img/download logo.png"
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
    

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const navigated = useNavigate();
    const handleHome = () => {
        navigated('/home');
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
                                        <input type="password"  placeholder='Password' />
                                    </div>
                                    <div className="form-control">
                                        <input type="password"  placeholder='New Password' />
                                    </div>
                                    
                                    <button className='login' onClick={()=>handleHome()} type='submit'> Submit</button>
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
