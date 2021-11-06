import React from 'react';
import './Footer.css'
import WhiteLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        // <footer className="bg-dark py-3">
        //     <div className="container">
        //         <div className="row footer-top py-5">
        //             <div className="col-md-6 mb-5">
        //                 <img src={WhiteLogo} alt="Hot Onion White Logo"/>
        //             </div>
        //             <div className="col-md-3">
        //                 <ul className="list-unstyled">
        //                     <li><Link to="/about">About Online Food</Link></li>
        //                     <li><Link to="/blog">Read Our Blog</Link></li>
        //                     <li><Link to="/login">Sign up to deliver</Link></li>
        //                     <li><Link to="/about">Add your restaurant</Link></li>
        //                 </ul>
        //             </div>
        //             <div className="col-md-3">
        //                 <ul className="list-unstyled">
        //                     <li><Link to="/help">Get Help</Link></li>
        //                     <li><Link to="/faq">Read FAQ</Link></li>
        //                     <li><Link to="/cities">View All Cities</Link></li>
        //                     <li><Link to="/nearme">Restaurants near me</Link></li>
        //                 </ul>
        //             </div>
        //         </div>

        //         <div className="footer-bottom d-flex justify-content-between align-items-center">
        //             <div>

        //             <p className="text-secondary">Copyright &copy;  2021 Online Food </p>
        //             <p className="text-secondary">Developed By <a href="https://github.com/MatrixGlitch-Hridoy">MatrixGlitch-Hridoy</a></p>
        //             </div>
        //             <ul className="list-inline">
        //                 <li className="list-inline-item ml-3"><a href="">Privacy Policy.</a></li>
        //                 <li className="list-inline-item  ml-3"><a href="">Terms of Use</a></li>
        //                 <li className="list-inline-item  ml-3"><a href="">Pricing</a></li>
        //             </ul>

        //         </div>
        //     </div>
        // </footer>
        <footer>
            <div className="footer">
        <footer className="text-center text-lg-start text-white bg-dark">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <img src={WhiteLogo} alt="Hot Onion White Logo"/>
                </div>

                <hr className="w-100 clearfix d-md-none mt-4" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                    About
                  </h6>
                <ul className="list-unstyled">
                         <li><Link to="/about">About Online Food</Link></li>
                            <li><Link to="/blog">Read Our Blog</Link></li>
                            <li><Link to="/login">Sign up to deliver</Link></li>
                           <li><Link to="/about">Add your restaurant</Link></li>
                       </ul>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <ul className="list-unstyled">
                          <li><Link to="/help">Get Help</Link></li>
                             <li><Link to="/faq">Read FAQ</Link></li>
                         <li><Link to="/cities">View All Cities</Link></li>
                             <li><Link to="/nearme">Restaurants near me</Link></li>
                         </ul>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>Uttara, Dhaka, Bangladesh</p>
                  <p>info@gmail.com</p>
                  <p>+880 1755567888</p>
                  <p>+ 01 234 567 89</p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <div className="text-center">
              <div className="p-3">
                {/* © 2021 Copyright:
                <a
                  className="text-white"
                  href="https://github.com/MatrixGlitch-Hridoy"
                >
                  MatrixGlitch-Hridoy
                </a> */}
                 <p className="text-secondary">Copyright &copy;  2021 Online Food </p>
                    <p className="text-secondary">Developed By <a href="https://github.com/MatrixGlitch-Hridoy">MatrixGlitch-Hridoy</a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
        </footer>
    );
};

export default Footer;