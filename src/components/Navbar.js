import React from 'react';



const Navbar = () => (
  <nav className="container">
    <div className="navbar row">
      <span className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
        <ul className="nav nav-pills nav-justified">
          <li id="nav-about" className="button"><a href="#">about</a></li>
          <li id="nav-projects" className="button"><a href="#">projects</a></li>
          <li id="nav-contact" className="button"><a href="#">contact</a></li>
        </ul>
      </span>
    </div>
  </nav>
);

export default Navbar