import React from 'react';

const ShoppingCartModal = ({ showCartModal, setShowCartModal, product }) => {
  const handleCloseModal = () => {
    setShowCartModal(false);
  };

  return (
    <div>
      {showCartModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">Your Cart</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Display selected product details */}
                {product && (
                  <div>
                    <h6>{product.title}</h6>
                    <p>Price: Rs.{product.price}</p>
                    {/* Any other details you want to display */}
                  </div>
                )}
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
                <button type="button" className="btn btn-success">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartModal;
