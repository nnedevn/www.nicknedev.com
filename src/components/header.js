import React from 'react'; 
import logo from '../logo.svg';

const Header = () => (
<header className="container">
    <div className="row">
      <a href="#">
          <span className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
          <img className="logo pull-left" src={logo} alt="Nick Nedev"/>
          <div className="pull-left">
            <h1>Nick Nedev</h1>
            <h3 className="title">web developer</h3>
          </div>
          </span>
      </a>
    </div>
  </header>
);

export default Header