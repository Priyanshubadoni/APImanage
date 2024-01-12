import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ toggleSignupModal }) => {
  const [fullName, setFullName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('https://6570054809586eff66409716.mockapi.io/userlogin/', {
      fullName: fullName,
      number: number,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        alert('Thank you for registering! Please login.');
        toggleSignupModal();
        navigate('/login');
      } else {
        console.error('Failed to register.');
      }
    });
  };

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title fs-1">Signup</h5>
            <button type="button" className="btn-close" onClick={toggleSignupModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  name="number"
                  placeholder="Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
