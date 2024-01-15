import React from 'react'
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Start Footer Area --> */}
        <footer className="footer section">
          {/* <!-- Start Footer Top --> */}
          <div className="footer-top">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    {/* <!-- Single Widget --> */}
                    <div className="single-footer f-about">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src="assets/images/logo/logo.svg"
                            alt="#"
                          />
                        </Link>
                      </div>
                      <p>
                        Making the world a better place through constructing
                        elegant hierarchies.
                      </p>
                      <h4 className="social-title">Follow Us On:</h4>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="lni lni-facebook-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-twitter-original"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-linkedin-original"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- End Single Widget --> */}
                  </div>
                  <div className="col-lg-2 col-md-6 col-12">
                    {/* <!-- Single Widget --> */}
                    <div className="single-footer f-link">
                      <h3>Solutions</h3>
                      <ul>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <a href="#">Analytics</a>
                        </li>
                        <li>
                          <a href="#">Commerce</a>
                        </li>
                        <li>
                          <a href="#">Insights</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- End Single Widget --> */}
                  </div>
                  <div className="col-lg-2 col-md-6 col-12">
                    {/* <!-- Single Widget --> */}
                    <div className="single-footer f-link">
                      <h3>Support</h3>
                      <ul>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                        <li>
                          <a href="#">Documentation</a>
                        </li>
                        <li>
                          <a href="#">Guides</a>
                        </li>
                        <li>
                          <a href="#">API Status</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- End Single Widget --> */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    {/* <!-- Single Widget --> */}
                    <div className="single-footer newsletter">
                      <h3>Subscribe</h3>
                      <p>Subscribe to our newsletter for the latest updates</p>
                      <form
                        action="#"
                        method="get"
                        target="_blank"
                        className="newsletter-form"
                      >
                        <input
                          name="EMAIL"
                          placeholder="Email address"
                          required="required"
                          type="email"
                        />
                        <div className="button">
                          <button className="sub-btn">
                            <i className="lni lni-envelope"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* <!-- End Single Widget --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Footer Top --> */}
          {/* <!-- Start Copyright Area --> */}
          <div className="copyright-area">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <p className="copyright-text">
                      © 2024 ESANSOFT COMPANY LIMITED - www.esansoft.com
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <p className="copyright-owner">
                      Designed and Developed by{' '}
                      <a
                        href="https://www.linkedin.com/in/suradath-bangnikrai-50b825140/"
                        rel="nofollow"
                        target="_blank"
                      >
                        Suradath Bangnikrai
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Copyright Area --> */}
        </footer>
        {/* <!--/ End Footer Area --> */}
      </>
    )
  }
}

export default Footer
