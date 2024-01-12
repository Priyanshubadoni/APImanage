import React from 'react';

const Contact = () => {
  return (
    <div className="container" >
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* Google Map Embed */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.69872521768!2d3.4380808143158546!3d6.428235325322937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1038f9469a020e91%3A0xd14d53cc618c2c46!2sYour%20Location!5e0!3m2!1sen!2sus!4v1615996284689!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
