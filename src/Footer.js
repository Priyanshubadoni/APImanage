import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <h5>About Us</h5>
            <p>
              Your company description or some information about your project goes here.
            </p>
          </div>
          <div className="col-md-3 text-center">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link className="nav-link" to="/about">About</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
              <li><Link className="nav-link" to="/privacy">Privacy</Link></li>
              <li><Link className="nav-link" to="/chatsuport">Chat Support</Link></li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: API Manage.com@Gmail.com</li>
              <li>Phone: +916398875317</li>
              <li>Address: India,Saharanput,247001 u.p</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="mb-0">© {new Date().getFullYear()} APIManage.com</p>
      </div>
    </footer>
  );
};

export default Footer;
