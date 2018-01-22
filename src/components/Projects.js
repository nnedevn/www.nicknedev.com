import React from 'react';
/* Import Router */
import emailImg from '../assets/HTMLEmail-200x150.png';
import snakeImg from '../assets/snake-200x150.png'


const Projects = () => (
  <div className="container site-content">
    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <h2>Projects</h2>
        <p className="padded"></p>
        <article className="row">
          <div className="col-sm-2">
            <h4></h4>
            <a className="red" href="https://nnedevn.github.io/snake-game/#"><img
              src={snakeImg} alt="" /></a>
          </div>
          <div className="col-sm-7 col-sm-offset-3 col-md-offset-2 red">
            <h4>Snake Game</h4>
            <p>An implementation of the famous Snake game using Canvas and JavaScript.
          </p>
            <a href="https://github.com/nnedevn/snake-game" target="_blank"
              className="btn btn-primary btn-sm">View on
            GitHub</a>
            <a href="https://nnedevn.github.io/snake-game/#" target="_blank"
              className="btn btn-primary btn-sm">View
            Live</a>
          </div>
        </article>
      </div>
    </div>
    <p class="padded"></p>

    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <p className="padded"></p>
        <article className="row">
          <div className="col-sm-2">
            <h4></h4>
            <a className="red" href="http://www.nicknedev.com/sandbox/Responsive-HTML-Email-Template/"><img
              src={emailImg} alt="" /></a>
          </div>
          <div className="col-sm-7 col-sm-offset-3 col-md-offset-2 red">
            <h4>Responsive HTML Email Template</h4>
            <p>A responsive email template constructed to render well on desktop as well as mobile email clients.
          </p>
            <a href="https://github.com/nnedevn/Responsive-HTML-Email-Template" target="_blank"
              className="btn btn-primary btn-sm">View on
            GitHub</a>
            <a href="http://www.nicknedev.com/sandbox/Responsive-HTML-Email-Template/" target="_blank"
              className="btn btn-primary btn-sm">View
            Live</a>
          </div>
        </article>
      </div>
    </div>

  </div>


);

export default Projects