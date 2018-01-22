import React from 'react';
/* Import Router */



const Contact = () => (
  <div className="container site-content">
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
        <div id="form-messages" className="alert alert-dismissible" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <form id="ajax-contact" className="form-horizontal" action="scripts/mailer.php" method="post"
          enctype="multipart/form-data">
          <fieldset>

            <h2>Contact me</h2>
            <p>Drop me a line and I will get back to you as soon as possible.</p>

            <div className="form-group">
              <div className="col-lg-10 col-md-11">
                <input id="name" name="name" type="text" placeholder="Name" className="form-control input required input" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-md-11">
                <input id="email" name="email" type="email" placeholder="Email Address"
                  className="form-control required input" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-md-11">
                <input id="phone" name="phone" type="tel" placeholder="Phone (optional)" className="form-control input" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-md-11">
                <textarea className="form-control input" id="message" name="message" placeholder="Enter your massage here."
                  rows="7"></textarea>

              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-md-11">
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
);

export default Contact