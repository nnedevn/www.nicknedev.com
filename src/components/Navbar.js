import React from 'react';
/* Import Router */
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
/* Import Components */
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Navbar = () => (
  <Router>
    <div>
      <nav className="container">
        <div className="navbar row">
          <span className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
            <ul className="nav nav-pills nav-justified">
              <li id="nav-about" className="button"><Link to="/">about</Link></li>
              <li id="nav-projects" className="button"><Link to="/projects">projects</Link></li>
              <li id="nav-contact" className="button"><Link to="/contact">contact</Link></li>
            </ul>
          </span>
        </div>
      </nav>

      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default Navbar