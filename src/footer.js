import React from 'react'
import './assets/css/footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { NavLink } from 'react-router-dom'
function footer() {
    return (
        <div>
            
<footer class="page-footer middleColor  font-small unique-color-dark">

  <div class="footerColor">
    <div class="container">

      
      <div class="row py-4 d-flex align-items-center">

        
        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0 footerTitle">
          <h6 class="mb-0">Get connected with us on social networks!</h6>
        </div>
        

        
        <div class="col-md-6 col-lg-7 text-center text-md-right">

          
          <a class="fb-ic">
            <i class="fa fa-facebook-f white-text mr-4"> </i>
          </a>
                    <a class="tw-ic">
            <i class="fa fa-twitter white-text mr-4"> </i>
          </a>
                    <a class="gplus-ic">
            <i class="fa fa-google-plus white-text mr-4"> </i>
          </a>
                    <a class="li-ic">
            <i class="fa fa-linkedin white-text mr-4"> </i>
          </a>
                    <a class="ins-ic">
            <i class="fa fa-instagram white-text"> </i>
          </a>

        </div>
        

      </div>
      

    </div>
  </div>

  
  <div class="container text-center text-md-left mt-5">

   
    <div class="row mt-3">

      
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h6 class="text-uppercase white font-weight-bold">Marine Ship Implemenation</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p className="white">We've got a strong team filled with caffeine addicted developers, gradient loving designers and machine like working managers providing a solution for closest pair</p>

      </div>
      

      
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        
        <h6 class="text-uppercase white font-weight-bold">SERVICES</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <a  href="#!">Closest Pair</a>
        </p>
        <p>
          <a href="#!">Collision Avoider</a>
        </p>
        <p>
          <a href="#!">Responsive Design</a>
        </p>

      </div>
      

      
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        
        <h6 class="text-uppercase white font-weight-bold">Useful links</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <a href="#about">About Us</a>
        </p>
        <p>
          <NavLink to="/closestpair">Closest Pair</NavLink>
        </p>
        <p>
          <a href="#!">Contact</a>
        </p>

      </div>
      

      
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

       
        <h6 class="text-uppercase white font-weight-bold">Contact</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p className="white"> 
          <i class="fa fa-home white mr-3"></i> Nagpur, 440018, India</p>
        <p className="white">
          <i class="fa fa-envelope white mr-3"></i> marineship@gmail.com</p>
        <p className="white">
          <i class="fa fa-phone white mr-3"></i> + 01 234 567 88</p>
        <p className="white">
          <i class="fa fa-print white mr-3"></i> + 01 234 567 89</p>

      </div>
      

    </div>
    
  </div>
  
  <div class="footer-copyright text-center py-3 copyrightColor">© 2020 :
    <a href="https://mdbootstrap.com/">  Tejas, Om and Ashutosh</a>
  </div>

</footer>
</div>
        
    )
}

export default footer
