import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import ShoppingCartModal from './ShoppingCartModal';
import { ProductList } from './ProductList';

const ProductCard = () => {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const navigate = useNavigate();

  const addToCart = (productId) => {
    const productToAdd = ProductList.find((product) => product.id === productId);

    if (productToAdd) {
      setCart([...cart, productToAdd]);
      setShowCartModal(true);
    }
  };

  const viewProduct = (id) => {
    navigate(`/viewcard/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {ProductList.map((product) => (
          <div key={product.id} className="col-md-3">
            <div className="card mb-4 custom-card">
              <img src={product.image} alt={product.title} className="card-img-top custom-card-img" />
              <div className="card-body custom-card-body">
                <h5 className="card-title custom-card-title">{product.title}</h5>
                <p className="card-text custom-card-text">{product.description}</p>
                <p className="card-text custom-card-text">Rs.{product.price}</p>
                <button onClick={() => addToCart(product.id)} className="btn btn-primary custom-btn">
                  <FaCartPlus />
                </button>
                <button onClick={() => viewProduct(product.id)} className="btn btn-primary custom-btn">
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-icon">
        <button onClick={() => setShowCartModal(true)}>
          Cart <span className="cart-count">{cart.length}</span>
        </button>
      </div>
      <ShoppingCartModal showCartModal={showCartModal} setShowCartModal={setShowCartModal} product={cart} />
    </div>
  );
};

export default ProductCard;
