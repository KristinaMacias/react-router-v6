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
        <nav>
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
        </nav>
        <br />

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
