import React, { Component } from 'react';
import './Home.css' ;
import bus1 from './home-assets/bus1.jpeg';
import bus2 from './home-assets/bus2.jpg';
import bus4 from './home-assets/bus5.jpeg';
import seat1 from './home-assets/seat1.jpeg';
import seat2 from './home-assets/seat2.jpeg';
import seat3 from './home-assets/seat3.jpeg';
import logo from './home-assets/safiri-logoo.png';
import { HashLink as Link } from 'react-router-hash-link';



export default function Home(){
  const userRole= localStorage.getItem('userRole')
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
    
  }
    return (
      
      <div className="home-container">
        <div className="navbar">
        <div><a className="navbar-brand" href="#">
            <img src={logo} />
            </a>
            <a class="nav-item nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
             </div>
                
          <nav className="navbar navbar-expand-lg navbar">
            
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
               {userRole?(
                 <Link to='/' onClick={logout}>logout</Link>
               ):
               
               <>
                 <Link to='/login'>login</Link>
                <Link to='/customer'>sign up</Link>
                 </>
               }
                
                
              </div>
           </div>
       </nav>
        </div>
        <div className="image-container">
          <div className="intro">
            <h1>Welcome to Safiri</h1>

            <h4>Travel with confidence and luxury</h4>
          </div>
        </div>
        <div className="middle-image">
          <div>
          <img src={bus2} />
          <p>Modern and well maintained buses</p>

          </div>
          <div>
          <img src={seat2} />
            <p>Comfortable and spacious seats</p>
          </div>
          
          
          
        </div>
        <div className="container">
        
            <div className='about text-center'>
            <h3><strong>About Us</strong></h3>
                
                <p>Safiri is a transport company based in Nairobi that offer bus transport service to and from Nairobi at very affodable cost.</p>
                  <p>Safiri allows you to check the available bus online without having to physically appear at the bus terminal hence saving you time and cost.</p><p> You can also book a seat online and check when the bus will be leaving. </p>
            </div>
        </div>
        <div className="container">
        <h2 className='text-center bold'>Services</h2> <br/>
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Bus Booking</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled mt-3 mb-4">
        <p>Check which bus is available, available seats, price per seat and book a seat online</p>
            <p>Our customers are our number one priolity.</p>
            
        </ul>
        <button type="button" className="btn btn-outline-dark service-btn">
            <Link to='/customer' className="p-3 text-white">Book </Link>
        </button>

        {/* <a type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</a> */}
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Driver Registration</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled mt-3 mb-4">
        <p>Are you a bus owner and you would like to get the value for your investment? </p>
            <p>Register your bus with us and relax, wait for the harvest.</p>
        </ul>
        <button type="button" className="btn btn-outline-dark service-btn">
            <Link to='/driver' className="p-3 text-white">Register a Driver</Link>
        </button>
      </div>
    </div>
  </div>
  </div>
       <div className="footer-container">
          <div className="footer">
            <footer>
              <div class="row my-5 justify-content-center py-5">
                
                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <img src={logo} />
                  <h3 class="rights">Safiri.</h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 bold-text ">
                    <b>MENU</b>
                  </h6>
                  <ul class="list-unstyled">
                    <li><Link to='#'>Home</Link></li>
                    <li>About</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p class="mb-1">605, Ngong Rd</p>
                  <p>Nairobi</p>
                </div>
              </div>
              <div className="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p class="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span class="mx-2">
                   <a href='https://facebook.com/elijah.muthoni.9' target="blank"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>{" "}
                  </p>
                  

                  <small className="rights">
                    <span>&#174;</span> All Rights Reserved.
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h6 class="mt-55 mt-2 text-muted bold-text">
                    <b>Customer care</b>
                  </h6>
                  <small>
                    {" "}
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    safiricustomercare@gmail.com
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  <h6 class="text-muted bold-text">
                    <b>Safiri Manager</b>
                  </h6>
                  <small>
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    safirimanager@gmail.com
                  </small>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
}