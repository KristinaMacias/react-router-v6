import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Store from "./Store";

const Links = () => {
  return (
    <>
    {/* need to update to react-bootstrap */}
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link" to="/store">
                  Store
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Links;
