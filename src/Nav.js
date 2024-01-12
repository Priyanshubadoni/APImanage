import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

import Modal from "./Modal"; 
import ShoppingCartModal from "./ShoppingCartModal";

const Nav = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          API Manage
        </Link>
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/homes">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/creatdata">
              Create Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/readdata">
              readdata
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/editdata">
              Edit Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deletedata">
              Delete Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todolist">
              to do list
            </Link>
          </li>
          </ul>
        <ul className="navbar-nav">
          <li className="nav-item fs-3 fw-bolt me-4" onClick={toggleUserModal}>
            <FaUserAlt />
          </li>
          {showUserModal && <Modal toggleModal={toggleUserModal}></Modal>}
          <li className="nav-item fs-3 fw-bolt" onClick={toggleCartModal}>
            <FaShoppingCart />
            
          </li>
          <ShoppingCartModal showCartModal={showCartModal} toggleCartModal={toggleCartModal} />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
