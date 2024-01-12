import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductList } from './ProductList';

const ViewCart = () => {
  const { id } = useParams();
  const product = ProductList.find((prod) => prod.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h2>{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
          />
          <p>{product.description}</p>
          <p>Price: Rs.{product.price}</p>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quantity</h5>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button className="btn btn-outline-secondary" type="button" onClick={handleDecrement}>-</button>
                </div>
                <input type="text" className="form-control text-center" value={quantity} readOnly />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={handleIncrement}>+</button>
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => alert(`You want to buy ${quantity} of ${product.title}`)}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
