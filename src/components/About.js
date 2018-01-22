import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const About = () => (
  <ReactCSSTransitionGroup>
  <div className="container site-content">
  <div className="row">
    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <h2>About me</h2>
      <p>I am a full stack JavaScript web developer based in Seattle, Washington. I like writing clean and functional single page applications which don't break your browser's features. </p>
      <p></p>
      <p>Here's my <a id="resume" href="https://www.nicknedev.com/assets/resume_NedevNick.pdf" target="_blank">résumé</a>.</p>
    </div>
  </div>
</div>
</ReactCSSTransitionGroup>
);

export default About