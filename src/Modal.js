import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Modal = ({ toggleModal, children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setShowSignupModal(false);
  };

  const toggleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
    setShowLoginModal(false);
  };

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <button type="button" className="btn-close" onClick={toggleModal}></button>
          </div>
          <div className="modal-body">
            {children}
            <div className="row">
              <div className="col-6">
                <button className="btn btn-outline-primary w-100" onClick={toggleLoginModal}>
                  <h3>Login</h3>
                </button>
                {showLoginModal && <Login toggleLoginModal={toggleLoginModal} />}
              </div>
              <div className="col-6">
                <button className="btn btn-outline-primary w-100" onClick={toggleSignupModal}>
                  <h3>Signup</h3>
                </button>
                {showSignupModal && <Signup toggleSignupModal={toggleSignupModal} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
