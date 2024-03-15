import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";



const Navbar = () => {
    
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger text-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
         <h3> FoOdieS </h3> 
        </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Areas
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Punjab
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Sindh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Balochistan
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Others
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>

            <div className="mx-2">
              <button
                type="button"
                className="btn btn-light mx-2"
                data-bs-toggle="modal"
                data-bs-target="#LoginModal"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#SignUpModal"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="LoginModal"
        tabIndex="-1"
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="LoginModalLabel">
                Login to iCoder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <div
        className="modal fade"
        id="SignUpModal"
        tabIndex="-1"
        aria-labelledby="SignUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="SignUpModalLabel">
                Get an iCoder Account
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cexampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cexampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Create Account
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </main>

  );
}

export default Navbar;
