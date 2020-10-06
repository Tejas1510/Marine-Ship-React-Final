import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/vendor/ionicons/css/ionicons.min.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce'
import Headerimg from './assets/img/intro-img.svg';
import { NavLink } from 'react-router-dom';
import Aboutimg from './assets/img/about-img.jpg';
import Tejas from './assets/img/tejas.png';
import Ashutosh from './assets/img/ashutosh.png';
import Om from './assets/img/om.jpg';
import './assets/css/style.css';
function homepage() {
    return (
        <div>
            <section id="hero" className="clearfix mt-5">
            <div className="container d-flex h-100">
                <div className="row justify-content-center align-self-center" >
                    <div className="col-md-6 intro-info order-md-first order-last">
                      <Fade left>
                        <h2>Marine Ship<br/><span>Implementation</span></h2>
                        </Fade>  
                        <div>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            <a href="#about" className="btn-get-started scrollto ml-3">View Demo</a>
                        </div>
                    </div>

                    <div className="col-md-6 intro-img order-md-last order-first" >
                        <img src= { Headerimg } className="img-fluid"/>
                    </div>
                </div>

            </div>
        </section>
        <main id="main">
            {/* About Section */}
            <section id="about" className="about">

                <div className="container" >
                <div className="row">

                    <div className="col-lg-5 col-md-6">
                    <div className="about-img" >
                    <Bounce Top>
                        <img src={Aboutimg} />
                        <img src={Aboutimg} />
                    </Bounce>  
                    </div>
                    </div>

                    <div className="col-lg-7 col-md-6">
                    <div className="about-content">
                        <h2>About Us</h2>
                        <h3>Marine Ship Implementation</h3>
                        <p>We've got a strong team filled with caffeine addicted developers, gradient loving designers and machine like working managers.</p>
                        <p>We basically offer two main services which are closest pair finder and collision avoider system. The Closest Pair finder is based upon the implementation of closest pair problem and collision avoider is an algorithm devised by our tech team which avoid collison between marine ship thus avoiding any loss.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* About Section end */}

            {/* Services Section */}
            <section id="services" className="services section-bg">
                <div className="container" >

                    <header className="section-header">
                    <h3>Services</h3>
                    </header>

                    <div className="row">

                        <div className="col-md-6 col-lg-4 wow bounceInUp" >
                            <div className="box">
                            <div className="icon icon1" >
                                <i className="ion-ios-analytics-outline i1"></i>
                            </div>
                            <h4 className="title"><NavLink to = "/closestpair">Closest Pair Finder</NavLink></h4>
                            <p className="description">The application is based on closest pair implementation and use to find two ships which are closest to each other</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" >
                            <div className="box">
                            <div className="icon icon2" >
                                <i className="ion-ios-bookmarks-outline i2">
                                </i></div>
                            <h4 className="title"><NavLink to="/collisionavoider">Collision Avoider</NavLink></h4>
                            <p className="description">It is collision avoider system built inorder to avoid any collision between ships and is based on stop and move protocol</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4" >
                            <div className="box">
                            <div className="icon icon3" >
                                <i className="ion-ios-paper-outline i3"></i>
                            </div>
                            <h4 className="title"><a href="">Responsive Design </a></h4>
                            <p className="description">Our Web App works on any type of platform and device and is go to app in any sensor detection system</p>
                            </div>
                        </div>
                        

                    </div>

                 </div>
            </section>
            {/* Service Section ends */}

            {/* Team Section Starts */}
            <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-header">
              <h3>Team</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="member">
                  <img src={Tejas} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Tejas tapas</h4>
                      <span>Lead Developer</span>
                      <div className="social">
                        <a href="#hero">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member">
                  <img src={Om} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Om Patre</h4>
                      <span>Lead Developer</span>
                      <div className="social">
                        <a href="#hero">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member">
                  <img src={Ashutosh} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Ashutosh Gupta</h4>
                      <span>Lead Developer</span>
                      <div className="social">
                        <a href="#hero">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Team Section Ends */}
            </main>
        </div>
    )
}

export default homepage
