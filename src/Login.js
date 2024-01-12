import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleLoginModal }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userIdEmail = e.target.userIdEmail.value;
    const password = e.target.password.value;

    fetch(`https://6570054809586eff66409716.mockapi.io/userlogin?email=${userIdEmail}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((userData) => {
        if (userData.length > 0 && userData[0].password === password) {
          alert('Login successful');
          navigate('/homes');
          toggleLoginModal();
        } else {
          alert('Invalid credentials. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title fs-1">Login</h5>
            <button type="button" className="btn-close" onClick={toggleLoginModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => {
              handleLogin(e);
              toggleLoginModal();
            }}>
              <div className="mb-3">
                <label htmlFor="userIdEmail" className="form-label">User ID or Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="userIdEmail"
                  name="userIdEmail"
                  placeholder="Enter User ID or Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
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

export default Login;
