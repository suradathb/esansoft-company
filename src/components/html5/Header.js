import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Start Header Area --> */}
        <header className="header navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="nav-inner">
                  {/* <!-- Start Navbar --> */}
                  <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                      <img src="./assets/images/logo/logo.svg" alt="Logo" />
                    </Link>
                    <button
                      className="navbar-toggler mobile-menu-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse sub-menu-bar"
                      id="navbarSupportedContent"
                    >
                      <ul id="nav" className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link
                            to="/"
                            className="active"
                            aria-label="Toggle navigation"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/About" aria-label="Toggle navigation">
                            Project
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dd-menu collapsed"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#submenu-1-1"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                          >
                            Pages
                          </Link>
                          <ul className="sub-menu collapse" id="submenu-1-1">
                            <li className="nav-item">
                              <Link to="/Page">Page</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="signin.html">Sign In</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="signup.html">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="reset-password.html">
                                Reset Password
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="mail-success.html">Mail Success</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="404.html">404 Error</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dd-menu collapsed"
                            to="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#submenu-1-2"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                          >
                            Blog
                          </Link>
                          <ul className="sub-menu collapse" id="submenu-1-2">
                            <li className="nav-item">
                              <Link to="/Blog">Blog Grid</Link>
                            </li>
                            <li className="nav-item">
                              <Link to="blog-single.html">Blog Single</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="contact.html"
                            aria-label="Toggle navigation"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- navbar collapse --> */}
                    <div className="button">
                      <Link to="/login" className="btn">
                        Get started
                      </Link>
                    </div>
                  </nav>

                  {/* <!-- End Navbar --> */}
                </div>
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </header>
        {/* <!-- End Header Area --> */}
      </>
    )
  }
}

export default Header
